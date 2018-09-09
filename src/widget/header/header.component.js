import React, { Component } from "react";
import "./header.component.css";
import HeaderButton from "./header-button/header-button.container";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <HeaderButton />
            </div>
        );
    }
}

export default Header;
