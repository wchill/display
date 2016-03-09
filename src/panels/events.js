var React = require('react');

/**
 * Events panel.
 */
var EventsPanel = React.createClass({
    render: function() {
        return <div className="panel panel-fill">
            <div className="panel-heading">
                <h2>Events</h2>
            </div>
            <div className="panel-body">
                Events go here
            </div>
        </div>;
    }
});

module.exports = EventsPanel;
