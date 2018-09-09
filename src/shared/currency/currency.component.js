import React, { Component } from "react";

class Currency extends Component {
    render() {
        return (
            <span className="currency-presenter">
                {this.props.amount.toLocaleString(navigator.language, {
                    style: "currency",
                    currency: this.props.code,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: this.props.fraction || 0
                })}
            </span>
        );
    }
}

export default Currency;
