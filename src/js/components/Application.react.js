var React = require('react');
var SeoReport = require('./SeoReport.react');
var Navigation = require('./Navigation.react');
var $ = require('jquery');

// Material-ui.
import Colors from 'material-ui/lib/styles';
var TextField = require('material-ui/lib/text-field');
var RaisedButton = require('material-ui/lib/raised-button');

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

    var wrap = $(window);
    var header = $(".header");
    var iconRight = $(".navbar-icon-right");
    wrap.on("scroll", function() {
      if (this.scrollY > 336) {
        header.addClass("navbar-fixed-top");
        iconRight.addClass("fixed");
      }
      else {
        header.removeClass("navbar-fixed-top");
        iconRight.removeClass("fixed");
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

    return <div>
      <Navigation />
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
