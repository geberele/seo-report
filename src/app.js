var React = require('react');
//var ReactDOM = require('react-dom');
//import Application from './components/Application.react';
var Application = require('./components/Application.react');


var h1 = React.createElement('h1', {
  className: 'header',
  key: 'header'
}, 'This is the h1');

//let p = React.createElement('p', {
//  className: 'content',
//  key: 'content'
//}, 'This is the paragraph');
//
//
//var createListItemElement = React.createFactory('li');
//
//let l1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Item 1');
//let l2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Item 2');
//let l3 = createListItemElement({className: 'item-3', key: 'item-3'}, 'Item 3');
//
//let list = [l1, l2, l3];
//let ul = React.createElement('ul', {className: 'item-list', key: 'item-list'}, list);
//
//let reactFragment = [h1, p, ul];
//
//let section = React.createElement('section', {
//  className: 'container',
//  key: 'section'
//}, reactFragment);

var existingDom = document.getElementById('seo-report');
////console.log(h1);
//console.log(existingDom);



//class MyComponent extends React.Component {
//  render() {
//    return <h1>Hello World</h1>;
//  }
//}
//ReactDOM.render(MyComponent, existingDom);

React.render(<Application />, document.getElementById('seo-report'));
