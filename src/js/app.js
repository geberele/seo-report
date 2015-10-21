var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

var existingDom = document.getElementById('seo-report');

ReactDOM.render(<Application />, document.getElementById('seo-report'));
