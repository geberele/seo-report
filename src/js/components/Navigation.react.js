var React = require('react');

// Material-ui.
var AppBar = require('material-ui/lib/app-bar');
var IconButton = require('material-ui/lib/icon-button');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menu/menu-item');

class Navigation extends React.Component {
  /**
   * Implements render().
   */
  render() {
    let rightField = <div className="navbar-header-right">
      <a href="https://github.com/geberele/seo-report" >Documentation</a>
      <a href="https://github.com/geberele/seo-report" >Support</a>
      <a href="https://github.com/geberele/seo-report" >Github</a>
    </div>;

    return <nav>
      <div className="navbar">
        <AppBar
          title="Seo Report"
          className="header"
          iconElementRight={rightField}/>

        <div className="navbar-icon-right">
          <IconMenu iconButtonElement={<IconButton iconClassName="material-icons"></IconButton>}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </div>
        <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>
      </div>
    </nav>;
  }
}

export default Navigation;
