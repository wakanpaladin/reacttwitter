var _ = require('lodash');
var React = require('react');
var Tweet = require('./Tweet.jsx');

module.exports = React.createClass({
	getInitialState:function() {
		debugger;
		return {tweetList:[]};
	},
	componentDidMount:function() {
		var state = {tweetList: this.state.tweetList.slice()}
		var ws = new WebSocket('ws://localhost:9999');
		debugger;
		ws.onmessage = function(ms) {
		    var newTweet = JSON.parse(ms.data);
		    state.tweetList.unshift(newTweet);
		    debugger;
		    state.tweetList = state.tweetList.slice(0,3);
			this.setState(state);
		}.bind(this);
	},
	render:function() {
		var cmp = this;
		var ts = 'No Tweets';
		if(cmp.state.tweetList[0]) {
    		ts = cmp.state.tweetList.map(function(t) {return <Tweet tweet={t}/>});
    	}
		return <div>
            <h1>Dashboard</h1>
            	{ts}
           	
        </div>	
	}
})


