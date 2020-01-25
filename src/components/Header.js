import React, { Component } from 'react';

// display the header
export class Header extends Component {
    render() {
        return (
            <header>
                <div className="pimg1">
                    <section className="welcome">
                        <h1>Welcome!</h1>
                        <p className="lead">We are here to help you find a perfect housing at UW</p>
                    </section>
                </div>
            </header>
        )
    }
}