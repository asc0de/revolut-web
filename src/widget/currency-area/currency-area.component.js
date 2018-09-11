import React, { Component } from "react";
import CurrencyCarousel from "./currency-carousel/currency-carousel.container";
import { CarouselTypes } from "./currency-area.constants";
import "./currency-area.component.css";

class CurrencyArea extends Component {
    render() {
        return (
            <div className="currency-area">
                <CurrencyCarousel code={this.props.source} type={CarouselTypes.SOURCE} />
                <CurrencyCarousel code={this.props.target} type={CarouselTypes.TARGET} />
            </div>
        );
    }
}

export default CurrencyArea;
