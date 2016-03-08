/*
    Exercise 1 
*/
var Hello = React.createClass({
	render: function() {
		return <span>Hello World!</span>
	}
});


React.render(
  <Hello/>,
  document.getElementsByTagName('body')[0]
);