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
        return <div>
            <h1>{this.state.date.format('h:mm A')}</h1>
        </div>;
    }
});

module.exports = ClockPanel;
