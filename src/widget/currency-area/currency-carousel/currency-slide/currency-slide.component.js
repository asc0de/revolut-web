import React, { Component } from "react";
import Currency from "../../../../shared/currency/currency.component";
import "./currency-slide.component.css";

class CurrencySlide extends Component {
    getWalletAmount() {
        const currencyWallet = this.props.wallet.find(currency => currency.id === this.props.code);
        return currencyWallet ? currencyWallet.amount : 0;
    }
    render() {
        return (
            <div className="currency-slide">
                <div className="currency-main-area">
                    <span className="currency-name">{this.props.code}</span>
                    <input type="number" className="currency-value" />
                </div>
                <div className="currency-secondary-area">
                    <span className="currency-additional-info">
                        You have <Currency amount={this.getWalletAmount()} code={this.props.code} fraction={2} />
                    </span>
                </div>
            </div>
        );
    }
}

export default CurrencySlide;
