
var Hello = React.createClass({
	render: function() {
		var name = this.props.name ? this.props.name : 'Default';
		return <div>{name} Hello!</div>
	}
});