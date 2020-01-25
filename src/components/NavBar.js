import React, { Component } from 'react';

//displays the navigation bar on the top of the webstie
export class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="name-of-title font-weight-bold"><a id="navItem1" href="#">UWOCH</a></li>
                    <li className="home"><a id="navItem2" href="#home">Home</a></li>
                </ul>
                <div className="user-space">
                    <li><a id="navItem3" href="#About">About Us</a></li>
                    <li><a id="navItem4" href="#contact">Contact</a></li>
                    <li><a id="navItem5" href="#login">User Account</a></li>
                    <li><a id="navItem6" href="#list">My List</a></li>
                    <li><button><i className="fa fa-search" aria-label="/search/"></i></button></li>
                </div>
                <div className="hamburger">
                    <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
                </div>
            </nav>
        )
    }
}


