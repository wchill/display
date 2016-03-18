var React = require('react');

var ads = require('../data/ads.json');

/**
 * Advertisements panel.
 */
var AdsPanel = React.createClass({
    getInitialState: function() {
        return {
            index: 0
        };
    },

    nextAd: function() {
        var newIndex = (this.state.index + 1) % ads.length;
        this.setState({index: newIndex});
    },

    componentDidMount: function() {
        setInterval(this.nextAd, 15000);
    },

    getCurrentAd: function() {
        return <img src={ads[this.state.index].imgPath} />;
    },

    render: function() {
        return <div className="ads-panel">
            {this.getCurrentAd()}
        </div>;
    }
});

module.exports = AdsPanel;
