var React = require('react');

var sponsors = require('../data/sponsors.json');

/**
 * Sponsors panel.
 */
var SponsorsPanel = React.createClass({
    render: function() {
        var goldLogos = sponsors.gold.map(function(sponsor) {
            return <li key={sponsor.name}>
                <img src={sponsor.logoPath} style={{maxWidth: 300}} />
            </li>
        });
        return <div className="panel">
            <div className="panel-heading">
                <h2>Sponsors</h2>
            </div>
            <div className="panel-body">
                {goldLogos}
            </div>
        </div>;
    }
});

module.exports = SponsorsPanel;
