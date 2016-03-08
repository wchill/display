var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header');
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
            <Header />
            <div className="body-container">
                <BeatsPanel />
                <MTDPanel />
                <MeetingTimesPanel />
                <SponsorsPanel />
            </div>
        </div>;
    }
});

ReactDOM.render(
    React.createElement(Dashboard),
    document.getElementById('main')
);
