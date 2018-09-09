import React, { Component } from "react";
import CurrencySlide from "./currency-slide/currency-slide.container";
import Currency from "../../../shared/shared.constant";
import "./currency-carousel.component.css";
import { CarouselTypes } from "../currency-area.constants";

class CurrencyCarousel extends Component {
    constructor() {
        super();
        this.choosenCurrency = Currency.USD;
    }

    componentWillMount() {
        this.type = this.props.type;
        this.choosenCurrency = this.type === CarouselTypes.SOURCE ? this.props.source : this.props.target;
    }

    render() {
        const dynamicStyles = {
            width: this.props.range.length * 100 + "%",
            marginLeft: -this.props.range.indexOf(this.choosenCurrency) * 100 + "%"
        };
        return (
            <div className={"currency-carousel " + (this.type === CarouselTypes.SOURCE ? "source" : "target")}>
                <div className="currency-carousel-container" style={dynamicStyles}>
                    {this.props.range.map((currency, i) => (
                        <CurrencySlide code={currency} key={i} type={this.props.type} />
                    ))}
                </div>
                <div className="dot-container">
                    {this.props.range.map((cur, i) => (
                        <span className={"dot " + (this.props.range[i] === this.choosenCurrency ? "active" : "")} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CurrencyCarousel;
