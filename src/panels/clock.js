var React = require('react');
var moment = require('moment');

var time = require('../utils/time');

/**
 * Clock panel.
 */
var ClockPanel = React.createClass({
    getInitialState: function() {
        return {
            date: new Date()
        };
    },

    tick: function() {
        this.setState({date: new Date()});
    },

    componentDidMount: function() {
        setInterval(this.tick, 1000);
    },

    render: function() {
        return <div className="clock-panel">
            <div className="clock-time">
                {time.formatTime(this.state.date)}
            </div>
            <div className="clock-date">
                {moment(this.state.date).format('dddd, MMMM D, YYYY')}
            </div>
        </div>;
    }
});

module.exports = ClockPanel;
