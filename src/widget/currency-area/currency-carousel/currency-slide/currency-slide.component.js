import React, { Component } from "react";
import Currency from "../../../../shared/currency/currency.component";
import { CarouselTypes } from "../../currency-area.constants";
import "./currency-slide.component.css";

class CurrencySlide extends Component {
    componentDidMount() {
        if (this.props.active && this.props.type === CarouselTypes.SOURCE) this.input.focus();
    }

    onInputChange(e) {
        this.props.inputChanged(e.target.value);
    }

    chooseNumberMode() {
        if (this.props.type === CarouselTypes.SOURCE) {
            return (
                <input
                    type="number"
                    className="currency-value"
                    value={this.props.exchange || ""}
                    ref={ref => {
                        this.input = ref;
                    }}
                    onChange={this.onInputChange.bind(this)}
                />
            );
        }

        if (this.props.type === CarouselTypes.TARGET) {
            return <span className="currency-value">{this.props.target ? Math.round(this.props.target * 100) / 100 : null}</span>;
        }
    }

    appendBackRate() {
        return (
            <span className="currency-additional-info">
                <Currency amount={1} code={this.props.code} /> = <Currency amount={this.props.backRate} code={this.props.sourceCurrency} fraction={2} />
            </span>
        );
    }

    render() {
        return (
            <div className="currency-slide">
                <div className="currency-main-area">
                    <span className="currency-name">{this.props.code}</span>
                    {this.chooseNumberMode()}
                </div>
                <div className="currency-secondary-area">
                    <span className="currency-additional-info">
                        You have <Currency amount={this.props.walletAmount} code={this.props.code} fraction={2} />
                    </span>
                    {this.props.type === CarouselTypes.TARGET ? this.appendBackRate() : null}
                </div>
            </div>
        );
    }
}

export default CurrencySlide;
