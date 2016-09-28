var React = require('react');
var $ = require('jquery');

var baseUrl = 'https://www-s.acm.illinois.edu/concert/';
var nowPlayingUrl = baseUrl + 'v1/now_playing';

/**
 * Beats by ACM (SC1404) now playing panel.
 */
var ConcertPanel = React.createClass({
    getInitialState: function() {
        return {
            nowPlaying: null,
            artError: false
        };
    },

    updateNowPlaying: function() {
        $.get(nowPlayingUrl, function(data) {
            this.setState({nowPlaying: data});
        }.bind(this));
    },

    componentDidMount: function() {
        this.updateNowPlaying();
        setInterval(this.updateNowPlaying, 1000);
    },

    componentDidUpdate: function(prevProps, prevState) {
        if (!prevState.nowPlaying ||
            prevState.nowPlaying.media.art_uri != this.state.nowPlaying.media.art_uri) {
        this.setState({artError: false});
        }
    },

    getTimeString: function(time) {
        time = Math.round(time);
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        return mins + ':' + ('0' + secs).substr(-2);
    },

    getArtUrl: function() {
        var nowPlaying = this.state.nowPlaying;
        if (!nowPlaying) {
            return baseUrl + 'static/default-album-art.jpg';
        }

        var artUri = nowPlaying.media.art_uri;
        if (this.state.artError || !artUri) {
            return baseUrl + 'static/default-album-art.jpg';
        } else if (/https?:\/\//.test(artUri)) {
            return artUri;
        } else {
            return baseUrl + nowPlaying.media.art_uri;
        }
    },

    handleError: function() {
        this.setState({artError: true});
    },

    render: function() {
        var nowPlaying = this.state.nowPlaying;

        var body = null;
        if (nowPlaying) {
            var elapsed = nowPlaying.player_status.current_time / 1000;
            var elapsedStr = this.getTimeString(elapsed);
            var duration = nowPlaying.media.length;
            var durationStr = this.getTimeString(duration);

            body = <div className="panel-body beats-panel-body">
                <img src={this.getArtUrl()} onError={this.handleError} />
                <div className="beats-text">
                    <div className="beats-title">
                        {nowPlaying.media.title}
                    </div>
                    <div>{nowPlaying.media.artist} - {nowPlaying.media.album}</div>
                    <div>{nowPlaying.media.queueingUser}</div>
                    <p>{elapsedStr} / {durationStr}</p>
                    <p>https://acm.illinois.edu/concert/</p>
                </div>
            </div>;
        }

        return <div className="panel beats-panel">
            <div className="panel-heading">
                <h2>Concert by ACM - Now Playing</h2>
            </div>
            {body}
        </div>;
    }
});

module.exports = ConcertPanel;
