var React = require('react');
var $ = require('jquery');
var ICAL = require('ical.js');
var moment = require('moment');
var classnames = require('classnames');

var icalUrl = 'https://www-s.acm.illinois.edu/calendar/feed.ics';
var EVENTS_INTERVAL_MS = 60 * 1000;
var ONE_DAY = new ICAL.Duration({days: 1});

/**
 * Events panel.
 */
var EventsPanel = React.createClass({
    getInitialState: function() {
        return {
            events: []
        };
    },

    updateEvents: function() {
        $.get(icalUrl, function(data) {
            var comp = new ICAL.Component(ICAL.parse(data));
            var now = ICAL.Time.now();
            var events = comp.getAllSubcomponents('vevent')
                .map(function(vevent) {
                    return new ICAL.Event(vevent);
                })
                .filter(function(vevent) {
                    return vevent.endDate.compare(now) >= 1;
                })
                .slice(0, 5);
            this.setState({events: events});
        }.bind(this));
    },

    componentDidMount: function() {
        this.updateEvents();
        setInterval(this.updateEvents, EVENTS_INTERVAL_MS);
    },

    formatDate: function(date, isEndDate) {
        var jsDate = date.toJSDate();
        if (isEndDate) {
            jsDate.setDate(jsDate.getDate() - 1);
        }
        return moment(jsDate).format('MMM D' + (date.isDate ? '' : ' h:mm A'));
    },

    formatEventTime: function(event) {
        var startDateStr = this.formatDate(event.startDate);
        var endDateStr = this.formatDate(event.endDate, true);
        if (event.startDate.isDate && event.duration.compare(ONE_DAY) === 0) {
            return startDateStr;
        }
        return startDateStr + ' \u2013 ' + endDateStr;
    },

    getEvents: function() {
        var events = this.state.events;
        if (events.length === 0) {
            return <p>No upcoming events</p>;
        }
        return events.map(function(event) {
            return <div key={event.uid} className="event-item">
                <div className="event-summary">{event.summary}</div>
                <div>{this.formatEventTime(event)}</div>
                <div>{event.location}</div>
            </div>;
        }.bind(this));
    },

    render: function() {
        var bodyClass = classnames({
            'panel-body': true,
            'events-body-no-events': this.state.events.length == 0
        });

        return <div className="panel events-panel">
            <div className="panel-heading">
                <h2>Events</h2>
            </div>
            <div className={bodyClass}>
                {this.getEvents()}
            </div>
        </div>;
    }
});

module.exports = EventsPanel;
