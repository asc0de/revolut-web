import React, { Component } from "react";
import Header from "./header/header.component";
import { startPollingData } from "./widget.service";
import "./widget.component.css";

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
            </div>
        );
    }
}

export default Widget;
