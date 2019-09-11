const React = require('react');
const ReactDOM = require('react-dom');

const myButton = React.creatElement('button', null, 'Click Me');
console.log(JSON.stringify(myButton));

ReactDOM.render(myButton, document.getElementById('app'));