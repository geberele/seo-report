var React = require('react');
var SeoReport = require('./SeoReport.react');
var $ = require('jquery');

// Material-ui.
import Colors from 'material-ui/lib/styles';
var TextField = require('material-ui/lib/text-field');
var RaisedButton = require('material-ui/lib/raised-button');
var AppBar = require('material-ui/lib/app-bar');
var IconButton = require('material-ui/lib/icon-button');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menu/menu-item');

// Actions/Store.
var SeoReportActions = require("../actions/SeoReportActions");
var SeoReportStore = require("../stores/SeoReportStore");

class Application extends React.Component {

  /**
   * Implements constructor().
   */
  constructor(props) {
    super(props);
    this.state = {
      source: 'stub.json',
      store: new SeoReportStore(),
      submitted: null,
      text: '',
      rightIcon: false,
      seoReportItems: null
    };
  }

  /**
   * Implements componentWillUnmount().
   */
  componentWillUnmount() {
    // Remove listener from the store.
    this.state.store.removeChangeListener(this._onChangeStore);
  }

  /**
   * Implements componentDidMount().
   */
  componentDidMount() {
    // Add listener to the store.
    this.state.store.addChangeListener(this._onChangeStore.bind(this));

    var that = this;
    var wrap = $(window);
    var header = $(".header");
    wrap.on("scroll", function() {
      if (this.scrollY > 336) {
        header.addClass("navbar-fixed-top");
        that.setState({rightIcon: true});
      }
      else {
        header.removeClass("navbar-fixed-top");
        that.setState({rightIcon: false});
      }
    });
  }

  /**
   * Updates the state according the store's changes.
   */
  _onChangeStore() {
    let seoReportItems = this.state.store.getSeoReport();
    this.setState({
      seoReportItems: seoReportItems,
      submitted: true
    });
  }

  /**
   * Updates the text of the textfield.
   *
   * @param {object} event
   */
  onChange(event) {
    this.setState({text: event.target.value});
  }

  /**
   * Handles the form submit.
   *
   * @param {object} event
   */
  handleSubmit(event) {
    // Removes default behavior.
    event.preventDefault();

    // Creates the action to import the SeoReport.
    let action = new SeoReportActions();
    let url = this.state.source + '?url=' + this.state.text;
    action.importSeoReport(url);
  }

  /**
   * Implements render().
   */
  render() {
    let report;
    if (this.state.submitted !== null) {
      report = <SeoReport seoReportItems={this.state.seoReportItems}/>;
    }

    let rightField;
    if (this.state.rightIcon) {
      rightField = <div className="navbar-header-right">
        <IconMenu iconButtonElement={
                    <IconButton>test</IconButton>
                  }>
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      </div>;
    }
    else {
      rightField = <div className="navbar-header-right">
        <a href="https://github.com/geberele/seo-report" >Documentation</a>
        <a href="https://github.com/geberele/seo-report" >Support</a>
        <a href="https://github.com/geberele/seo-report" >Github</a>
      </div>;
    }

    return <div>
      <nav>
        <div className="navbar">
          <AppBar
            title="Seo Report"
            className="header"
            iconElementRight={rightField}/>
        </div>
      </nav>
      <section>
        <div className="container theme-showcased" role="main">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                  floatingLabelText="URL"
                  hintText="Ex: http:www.google.com"
                  underlineFocusStyle={{borderColor: Colors.amber900}}
                  value={this.state.text}
                  onChange={this.onChange.bind(this)}/>
                <RaisedButton type="submit" label="Get Report"/>
              </form>
            </div>
          </div>
          {report}
        </div>
      </section>
    </div>;
  }
}

export default Application;
