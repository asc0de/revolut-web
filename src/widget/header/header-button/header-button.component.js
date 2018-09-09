import React, { Component } from "react";
import Currency from "../../../shared/currency/currency.component";
import "./header-button.component.css";

class HeaderButton extends Component {
    render() {
        return (
            <button className="header-button">
                <Currency amount={1} code={this.props.source} /> = <Currency amount={this.props.rate} code={this.props.target} fraction={5} />
            </button>
        );
    }
}

export default HeaderButton;
