var React = require('react');
//var Semantic = require('semantic-ui');
var RaisedButton = require('material-ui/lib/raised-button');
var AppBar = require('material-ui/lib/app-bar');

// Menu.
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
let DropDownMenu = require('material-ui/lib/drop-down-menu');

// Buttons.
var IconButton = require('material-ui/lib/icon-button');
var FlatButton = require('material-ui/lib/flat-button');

// Icons.
var NavigationClose = require('material-ui/lib/svg-icons/navigation/close');

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {style: this.getStyle()};
  }

  getStyle() {
    return {
      fontSize: '26px',
      fontWeight: '600',
      display: 'inline-block',
      color: 'red'
    };
  };

  changeColor() {
    let style = this.getStyle();
    if (this.state.style.color == 'red') {
      style.color = 'green';
    }
    else {
      style.color = 'red';
    }
    this.setState({style: style});
  }

  _onClick() {
    console.log('hello world!');
  }

  render() {
    let menuItems = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' },
      { payload: '3', text: 'Weeknights' },
      { payload: '4', text: 'Weekends' },
      { payload: '5', text: 'Weekly' },
    ];

    return (
      <div>
        <DropDownMenu menuItems={menuItems} />
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />

        <AppBar
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />} />


        <RaisedButton label="Default" />
        <div className="ui three buttons">
          <button className="ui active button">One</button>
          <button className="ui button">Two</button>
          <button className="ui button">Three</button>
        </div>
        <div className="application" style={this.state.style} onClick={this.changeColor.bind(this)}>Hello World!</div>
      </div>
    );
  }
}

export default Application;
