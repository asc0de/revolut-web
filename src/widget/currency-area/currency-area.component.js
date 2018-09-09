import React, { Component } from "react";
import CurrencyCarousel from "./currency-carousel/currency-carousel.container";
import { CarouselTypes } from "./currency-area.constants";
import "./currency-area.component.css";

class CurrencyArea extends Component {
    render() {
        return (
            <div className="currency-area">
                <CurrencyCarousel current={this.props.source} compareTo={this.props.target} type={CarouselTypes.SOURCE} />
                <CurrencyCarousel current={this.props.target} compareTo={this.props.source} type={CarouselTypes.TARGET} />
            </div>
        );
    }
}

export default CurrencyArea;
