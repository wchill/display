var React = require('react');

var meetingTimes = require('../data/meeting-times.json');

/**
 * Meeting times panel.
 */
var MeetingTimesPanel = React.createClass({
    render: function() {
        var items = meetingTimes.map(function(meeting) {
            var location = meeting.location ? meeting.location : 'TBA';
            var time = meeting.time ? meeting.time : 'TBA';
            return <li key={meeting.name}>
                {meeting.name} - {location} - {time}
            </li>;
        });
        return <div className="panel panel-fill meeting-times-panel">
            <div className="panel-heading">
                <h2>Meeting Times</h2>
            </div>
            <div className="panel-body">
                {items}
            </div>
        </div>;
    }
});

module.exports = MeetingTimesPanel;
