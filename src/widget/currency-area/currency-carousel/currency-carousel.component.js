import React, { Component } from "react";
import CurrencySlide from "./currency-slide/currency-slide.container";
import Currency from "../../../shared/shared.constant";
import { CarouselTypes } from "../currency-area.constants";
import { CarouselSettings } from "./currency-carousel.constants";
import "./currency-carousel.component.css";

class CurrencyCarousel extends Component {
    constructor() {
        super();
        this.choosenCurrency = Currency.USD;
        this.stare = {
            startX: 0
        };

        this.onTapStart = this.onTapStart.bind(this);
        this.onTapEnd = this.onTapEnd.bind(this);
        this.swipeListeners = {
            onTouchStart: this.onTapStart,
            onTouchEnd: this.onTapEnd,
            onMouseDown: this.onTapStart,
            onMouseUp: this.onTapEnd
        };
    }

    onTapStart(e) {
        this.setState({
            startX: e.clientX || e.changedTouches[0].clientX
        });
    }

    onTapEnd(e) {
        const endX = e.clientX || e.changedTouches[0].clientX;
        // set mouse moves tolerance
        if (Math.abs(this.state.startX - endX) < CarouselSettings.TAP_TOLERANCE) return;
        if (this.state.startX > endX) {
            this.goToNext();
        } else {
            this.goToPrevious();
        }
        this.setState({
            startX: 0
        });
    }

    goToNext() {
        const nextCurrency = this.props.range[this.props.range.indexOf(this.props.code) + 1];
        if (!nextCurrency) return;

        if (this.props.type === CarouselTypes.SOURCE) this.props.sourceChanged(nextCurrency);
        if (this.props.type === CarouselTypes.TARGET) this.props.targetChanged(nextCurrency);
    }

    goToPrevious() {
        const previousCurrency = this.props.range[this.props.range.indexOf(this.props.code) - 1];
        if (!previousCurrency) return;

        if (this.props.type === CarouselTypes.SOURCE) this.props.sourceChanged(previousCurrency);
        if (this.props.type === CarouselTypes.TARGET) this.props.targetChanged(previousCurrency);
    }

    render() {
        const dynamicStyles = {
            width: this.props.range.length * 100 + "%",
            marginLeft: -this.props.range.indexOf(this.props.code) * 100 + "%"
        };
        return (
            <div className={"currency-carousel " + (this.props.type === CarouselTypes.SOURCE ? "source" : "target")}>
                <div className="currency-carousel-container" style={dynamicStyles} {...this.swipeListeners}>
                    {this.props.range.map((cur, i) => (
                        <CurrencySlide code={cur} key={i} type={this.props.type} active={cur === this.props.code} />
                    ))}
                </div>
                <div className="dot-container">
                    {this.props.range.map((cur, i) => (
                        <span className={"dot " + (cur === this.props.code ? "active" : "")} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CurrencyCarousel;
