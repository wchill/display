var React = require('react');
var $ = require('jquery');
var async = require('async');

var secrets = require('../secrets');

var apiUrl = 'https://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop';

/**
 * MTD bus times panel.
 */
var MTDPanel = React.createClass({
    getInitialState: function() {
        return {
            departures: []
        };
    },

    updateDepartures: function() {
        var params = $.param({stop_id: 'GWNMN', key: secrets.mtdApiKey});
        var url = apiUrl + '?' + params;
        $.get(url, function(data) {
            this.setState({departures: data.departures});
        }.bind(this));
    },

    componentDidMount: function() {
        // MTD limits requests to once per minute
        this.updateDepartures();
        setInterval(this.updateDepartures, 60000);
    },

    getMinsText: function(mins) {
        if (mins === 0) {
            return 'due';
        }
        return mins + ' min' + (mins !== 1 ? 's' : '');
    },

    render: function() {
        var items = this.state.departures.map(function(departure) {
            var mins = departure.expected_mins;
            return <li key={departure.trip.trip_id}>
                {this.getMinsText(mins)} - {departure.headsign}
            </li>;
        }.bind(this));

        return <div className="panel">
            <div className="panel-heading">
                <h2>MTD Bus Times</h2>
            </div>
            <div className="panel-body">
                <p>Goodwin &amp; Main</p>
                <ul>
                    {items}
                </ul>
            </div>
        </div>;
    }
});

module.exports = MTDPanel;
