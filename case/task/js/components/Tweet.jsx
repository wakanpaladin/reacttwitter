var React = require('react');

module.exports = React.createClass({
    render:function() {
        return <div className="tweet">
            <div className="tweet-header">
                <img className="tweet-image" src={ this.props.tweet.user.profile_image_url } />
                <div className="tweet-image-offset tweet-name">{this.props.tweet.user.name}</div>
                <div className="tweet-image-offset tweet-screen-name">{this.props.tweet.user.screen_name}</div>
            </div>

            <div className="tweet-text">{this.props.tweet.text}</div>
            <div className="tweet-stats">
                <span className="tweet-user-followers">
                    <strong>12,058</strong>
                    <span className="tweet-stats-desc">followers</span>
                </span>
            </div>
            <span className="tweet-flag flag-icon flag-icon-{this.props.tweet.user.lang}"></span>
            <span className="tweet-country tweet-stats-desc">Norge</span>
            <div className="tweet-city tweet-stats-desc">Langesund, Telemark</div>
        </div>
    }
});