import React, { Component } from "react";
import "./header-button.component.css";

class HeaderButton extends Component {
    render() {
        return (
            <button className="header-button">
                <span>1$ = 70 rub.</span>
            </button>
        );
    }
}

export default HeaderButton;
