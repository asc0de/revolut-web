import React, { Component } from "react";
import CurrencyCarousel from "./currency-carousel/currency-carousel.component";
import "./currency-area.component.css";

class CurrencyArea extends Component {
    render() {
        return (
            <div className="currency-area">
                <CurrencyCarousel current={this.props.source} compareTo={this.props.target} />
                <CurrencyCarousel current={this.props.target} compareTo={this.props.source} />
            </div>
        );
    }
}

export default CurrencyArea;
