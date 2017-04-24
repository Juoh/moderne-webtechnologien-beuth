function handleClick() {
  var hello_world = document.getElementById("hello_world");
  hello_world.innerHTML = "Hello Berlin!";
}

var element = ({
<div>
    <h1 id="hello_world">Hello world!</h1>
    <button ref="button" onClick={handleClick}>Click</button>
</div>}
); ReactDOM.render( element, document.getElementById('root') );
