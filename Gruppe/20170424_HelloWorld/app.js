import react from "https://unpkg.com/react@latest/dist/react.js";
import react-dom from"https://unpkg.com/react-dom@latest/dist/react-dom.js";
import "https://unpkg.com/babel-standalone@6.15.0/babel.min.js";

var React = require('react');
var ReactDOM = require('react-dom');

  function handleClick() {
      var hello_world = document.getElementById("hello_world");
      hello_world.innerHTML = "Hello Berlin!";
}

   var MyComponentClass = React.createClass({
     render: function () {
       return (`<div>
         <button onClick={handleClick}>click</button>
         <h1>Hello world</h1>
         </div>`);
     }
   });

     ReactDOM.render(
       <MyComponentClass/>,
       document.getElementById('root')
     );
