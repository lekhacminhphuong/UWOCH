import React, { Component } from 'react';
import { ComparisonList } from './ComparisonList';
import { ComparisonTable} from './ComparisonTable';
import { Button } from 'reactstrap';

// Include "ComparisonList" and "ComparisonTable" componenets
// if the selected list is empty
// it returns nothing 
export class Comparison extends Component {
    render() {
        let items = this.props.items;
        if(items.length === 0) {
            return (
            <div>
                <ComparisonList items={items} removeCallback={(e) => this.props.removeCallback(e)}/>
            </div>
            )
        } else {
            return (
        <div>
            <div className="comparison-button">
                <Button type="button" color="danger" id="clear" onClick={this.props.handleClick}>Clear</Button>
            </div>
            <ComparisonList items={items} removeCallback={(e) => this.props.removeCallback(e)}/>
            <ComparisonTable items={items}/>
        </div>
            )
        }
    }
}