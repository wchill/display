var React = require('react');
var moment = require('moment');

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

    // Build the time string manually because moment.js occasionally formats
    // the hour as 2.225071737871332e-308
    getTimeString: function() {
        var date = this.state.date;

        var hours = date.getHours() % 12;
        hours = hours === 0 ? 12 : hours;

        var mins = date.getMinutes();
        mins = ('0' + mins).substr(-2);

        var ampm = date.getHours() < 12 ? 'AM' : 'PM';

        return hours + ':' + mins + ' ' + ampm;
    },

    render: function() {
        return <div className="clock-panel">
            <div className="clock-time">
                {this.getTimeString()}
            </div>
            <div className="clock-date">
                {moment(this.state.date).format('dddd, MMMM D, YYYY')}
            </div>
        </div>;
    }
});

module.exports = ClockPanel;
