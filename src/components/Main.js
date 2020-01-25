import React, { Component } from 'react';
import { OptionContainer } from './OptionContainer';
import { Comparison } from './Comparison';

// contains the whole strucutre of the body of the website
// which includes the option container component and caomparison component 
// this componenet contains the state and modifies the state in different functions
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                housing: [],
                selected: []
            },
            private: true,
            community: true,
        }
    }

    // fetch the data from json file 
    // and update our state 
    componentDidMount() {
        fetch('./mydata.json').then((response) => {
            return response.json()
        })
            .then((data) => {
                // Adding status for each item's button ('Add to Cart' or 'Added') into the whole data
                for (let i = 0; i < data.housing.length; i++) {
                    data.housing[i].status = "Add to Cart";
                }
                // Create the new state that has new data housing which has status
                let newState = {
                    data: {
                        housing: data.housing,
                        selected: []
                    },
                    private: true,
                    community: true
                }
                this.setState(newState)
            })
            .catch((err) => { })
    }
    
    // change the state of private bath
    handleChangePrivate = (e) => {
        this.setState({ private: !this.state.private })
    }

    // change the state of community bath
    handleChangeCommunity = (e) => {
        this.setState({ community: !this.state.community })
    }

    // Changing the status of item parameter into "Added"
    // Updating the selected stage
    handleChangeAddStatus = (item) => {
        for (let i = 0; i < this.state.data.housing.length; i++) {
            if (this.state.data.housing[i].name === item.name) {
                this.state.data.housing[i].status = "Added";
                if(!this.state.data.selected.includes(this.state.data.housing[i])) {
                    this.state.data.selected.push(this.state.data.housing[i]);
                }
                let newState = {
                    data: {
                        housing: this.state.data.housing,
                        selected: this.state.data.selected
                    },
                    private: true,
                    community: true
                }
                this.setState(newState)
            }
        }
    }
    
    // change the text of the "Added" button to "Add to Cart"
    // when we click "clear" button 
    handleClick = (e) => {
        for (let i = 0; i < this.state.data.housing.length; i++) {
                this.state.data.housing[i].status = "Add to Cart";
                let newState = {
                    data: {
                        housing: this.state.data.housing,
                        selected: []
                    },
                    private: true,
                    community: true
                }
                this.setState(newState)
            
        }
    }

    // Changing the status "Added" to "Add to Cart" when clicking the remove button
    // Updating the housing state
    // Removing the clicked items from the selected list when clicking the remove button
    // Updating the selected state
    removeItem = (item) => {
        for (let i = 0; i < this.state.data.housing.length; i++) {
            if (this.state.data.housing[i].name === item.name) {
                this.state.data.housing[i].status = "Add to Cart";
                let newState = {
                    data: {
                        housing: this.state.data.housing,
                        selected: this.state.data.selected
                    },
                    private: true,
                    community: true
                }
                this.setState(newState)
            }
        }
        for (let i = 0; i < this.state.data.selected.length; i++) {
            if (this.state.data.selected[i].name === item.name) {
                this.state.data.selected.splice(i, 1)
            }
            let newState = {
                data: {
                    housing: this.state.data.housing,
                    selected: this.state.data.selected
                },
                private: true,
                community: true
            }
            this.setState(newState)
        }
    }

    render() {
        // Filtered List for Housing Option Items that is filtered when getting input from private and community button
        let filteredList = [];
        if (this.state.private && this.state.community) {
            filteredList = this.state.data.housing;

        } else if (this.state.private && !this.state.community) {
            filteredList = this.state.data.housing.filter((item) => { return item.privateBath === true });

        } else if (!this.state.private && this.state.community) {
            filteredList = this.state.data.housing.filter((item) => { return item.privateBath === false });

        } else {
            filteredList = []
        }

        return (
            <main>
                <section className="text-between-imgs">
                    <h2>Our Mission</h2>
                    <p>Finding where to live on campus can be a difficult thing to decide.
                        We have gone through the same process and we understand the struggle.
                        Therefore, we would like to help you find the perfect housing the best way we know how.
                        This website is a tool to help you find your future home at UW based on your preferences.
                        With this webite, we hope to help freshman and transfer students or anyone
                        who are interested in living on campus a step closer to find a perfect housing!
                        </p>
                </section>
                <div className="pimg2"></div>

                <OptionContainer items={filteredList} privateCallback={(e) => { this.handleChangePrivate(e) }} communityCallback={(e) => { this.handleChangeCommunity(e) }}
                    private={this.state.private} community={this.state.community} addCallBack={(e) => { this.handleChangeAddStatus(e) }} />

                <Comparison items={this.state.data.selected} removeCallback={(e) => { this.removeItem(e)} } handleClick={(e) => this.handleClick(e)} />

                <div className="pimg3">
                    <p className="text-center font-italic" cite="https://hfs.uw.edu/Live">
                        <cite><a href="https://hfs.uw.edu/Live/Undergraduates%E2%80%94Living-on-Campus"><i>
                            83%</i></a> of UW students who live on campus rate their experience as "excellent."
                        </cite>
                    </p>
                </div>
            </main>
        )
    }
}

