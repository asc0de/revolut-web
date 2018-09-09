import React, { Component } from "react";
import Header from "./header/header.component";
import { startPollingData } from "./widget.service";
import "./widget.component.css";
import CurrencyArea from "./currency-area/currency-area.component";

class Widget extends Component {
    constructor() {
        super();
        this.pollInterval = null;
    }

    componentDidMount() {
        this.pollInterval = startPollingData(rates => {
            this.props.ratesReceived(rates);
        });
    }

    componentWillUnmount() {
        clearInterval(this.pollInterval);
    }

    render() {
        return (
            <div className="widget">
                <Header />
                <CurrencyArea source={this.props.sourceCurrency} target={this.props.targetCurrency} />
            </div>
        );
    }
}

export default Widget;
