var React = require('react');

var sponsors = require('../data/sponsors.json');

/**
 * Sponsors panel.
 */
var SponsorsPanel = React.createClass({
    getInitialState: function() {
        return {
            index: 0
        };
    },

    nextSponsor: function() {
        var newIndex = (this.state.index + 1) % sponsors.length;
        this.setState({index: newIndex});
    },

    componentDidMount: function() {
        setInterval(this.nextSponsor, 5000);
    },

    getCurrentSponsor: function() {
        return sponsors[this.state.index];
    },

    render: function() {
        var sponsor = this.getCurrentSponsor();
        return <div className="panel panel-fill">
            <div className="panel-heading">
                <h2>Sponsors</h2>
            </div>
            <div className="panel-body sponsor-body">
                <img className="sponsor-logo" src={sponsor.logoPath} />
            </div>
        </div>;
    }
});

module.exports = SponsorsPanel;
