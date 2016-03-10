var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header');
var SlidesPanel = require('./panels/slides');
var BeatsPanel = require('./panels/beats');
var MTDPanel = require('./panels/mtd');
var MeetingTimesPanel = require('./panels/meeting-times');
var SponsorsPanel = require('./panels/sponsors');
var EventsPanel = require('./panels/events');

/**
 * Top-level dashboard component.
 */
var Dashboard = React.createClass({
    render: function() {
        return <div>
            <Header />
            <div className="row row-primary">
                <SlidesPanel />
                <MeetingTimesPanel />
            </div>
            <div className="row row-secondary">
                <SponsorsPanel />
                <MTDPanel />
                <BeatsPanel />
            </div>
        </div>;
    }
});

ReactDOM.render(
    React.createElement(Dashboard),
    document.getElementById('main')
);
