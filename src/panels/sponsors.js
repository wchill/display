var React = require('react');

var sponsors = require('../data/sponsors.json');

/**
 * Sponsors panel.
 */
var SponsorsPanel = React.createClass({
    render: function() {
        var goldLogos = sponsors.gold.map(function(sponsor) {
            return <div className="sponsor-logo" key={sponsor.name}>
                <img src={sponsor.logoPath} />
            </div>
        });
        var silverLogos = sponsors.silver.map(function(sponsor) {
            return <div className="sponsor-logo" key={sponsor.name}>
                <img src={sponsor.logoPath} />
            </div>
        });
        var bronzeLogos = sponsors.bronze.map(function(sponsor) {
            return <div className="sponsor-logo" key={sponsor.name}>
                <img src={sponsor.logoPath} />
            </div>
        });
        return <div className="panel panel-fill">
            <div className="panel-heading">
                <h2>Sponsors</h2>
            </div>
            <div className="panel-body">
                <h3>Gold</h3>
                {goldLogos}
                <h3>Silver</h3>
                {silverLogos}
                <h3>Bronze</h3>
                {bronzeLogos}
            </div>
        </div>;
    }
});

module.exports = SponsorsPanel;
