
var Helloes = React.createClass({
	render: function() {
		var names = this.props.names;//['Peter','Dave']
		return <div id='helloes'>
					{names.map(function(n){return <Hello name={n}/>})}
				</div>
	}
});

