import React, { Component } from 'react';
import 'whatwg-fetch';
import "./style.css";
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

// render every component for the website
export default class App extends Component {
    render() {        
        return (
            <div>
                <NavBar />
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}




