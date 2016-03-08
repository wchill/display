var React = require('react');
var moment = require('moment');

/**
 * Clock panel.
 */
var ClockPanel = React.createClass({
    getInitialState: function() {
        return {
            date: moment()
        };
    },

    tick: function() {
        this.setState({date: moment()});
    },

    componentDidMount: function() {
        setInterval(this.tick, 1000);
    },

    render: function() {
        return <div className="clock-panel">
            <h1>{this.state.date.format('h:mm A')}</h1>
            <h2>{this.state.date.format('dddd, MMMM D, YYYY')}</h2>
        </div>;
    }
});

module.exports = ClockPanel;
