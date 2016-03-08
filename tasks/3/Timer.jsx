var Timer = React.createClass({
	render:function() {//debugger;
		// debugger;
		return <span> I was loaded {(new Date().getTime()/1000- this.props.startTime).toFixed(1)} secs ago. 
				This has been refreshed {this.state.count-1} times.</span>;
	},
	getInitialState:function() {
		return {count:1}
	},
	componentDidMount:function() {
		cmp = this;
		cmp.interval = setInterval(function(){
			// debugger;
			cmp.setState({count:cmp.state.count+1})
		},100);
	},
	componentWillUnmount:function() {
		clearInterval(cmp.interval);
	}
})

