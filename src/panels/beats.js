var React = require('react');
var $ = require('jquery');

var baseUrl = 'https://www-s.acm.illinois.edu/beats/1104/';
var nowPlayingUrl = baseUrl + 'v1/now_playing';

/**
 * Beats by ACM (SC1404) now playing panel.
 */
var BeatsPanel = React.createClass({
    getInitialState: function() {
        return {
            nowPlaying: null
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

    render: function() {
        var nowPlaying = this.state.nowPlaying;

        var body = null;
        if (nowPlaying) {
            var artUrl = baseUrl;
            if (nowPlaying.media.art_uri) {
                artUrl += nowPlaying.media.art_uri;
            } else {
                artUrl += 'static/default-album-art.jpg';
            }

            body = <div>
                <img style={{maxHeight: 200}} src={artUrl} />
                <p>Title: {nowPlaying.media.title}</p>
                <p>Album: {nowPlaying.media.album}</p>
                <p>Artist: {nowPlaying.media.artist}</p>
                <p>Time: {nowPlaying.player_status.current_time / 1000}</p>
                <p>Duration: {nowPlaying.media.length}</p>
            </div>;
        }

        return <div>
            <h2>Beats by ACM</h2>
            <h3>Now Playing</h3>
            {body}
            <p>https://www-s.acm.illinois.edu/beats/1104/</p>
        </div>;
    }
});

module.exports = BeatsPanel;
