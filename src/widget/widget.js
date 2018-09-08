import React, { Component } from "react";
import Header from "./header/header.component";
import "./widget.css";

class Widget extends Component {
    render() {
        return (
            <div className="widget">
                <Header />
            </div>
        );
    }
}

export default Widget;
