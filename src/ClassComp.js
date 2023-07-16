import React, { Component } from "react";
import './App.css'

class ClassComp extends Component {
    render() {
        return (
            <>
            <div class="mains">
                <div class="dajo">
                    <h1>Class based comp</h1>
                    <p className='para'>external css</p>
                    <p style={{ color: "orange" }}>Inline css</p>
                </div>
                </div>
            </>
        )
    }
}
export default ClassComp;