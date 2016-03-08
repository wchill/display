var React = require('react');
var ReactDOM = require('react-dom');

var ClockPanel = require('./panels/clock');
var BeatsPanel = require('./panels/beats');
var MTDPanel = require('./panels/mtd');
var MeetingTimesPanel = require('./panels/meeting-times');
var SponsorsPanel = require('./panels/sponsors');

/**
 * Top-level dashboard component.
 */
var Dashboard = React.createClass({
    render: function() {
        return <div>
            <img src="img/acm-logo.png" style={{maxWidth: 150}} />
            <h1>Association for Computing Machinery</h1>
            <ClockPanel />
            <BeatsPanel />
            <MTDPanel />
            <MeetingTimesPanel />
            <SponsorsPanel />
        </div>;
    }
});

ReactDOM.render(
    React.createElement(Dashboard),
    document.getElementById('main')
);
