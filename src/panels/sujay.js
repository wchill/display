var React = require('react');

/**
 * Sujay.xyz panel.
 */
var SujayPanel = React.createClass({
    refresh: function() {
        this.refs.sujay.contentWindow.location.reload();
    },

    componentDidMount: function() {
        setInterval(this.refresh, 10000);
    },

    render: function() {
        return <div className="sujay-panel">
            <iframe
                src="http://sujay.xyz/"
                className="sujay-frame"
                ref="sujay" />
        </div>;
    }
});

module.exports = SujayPanel;
