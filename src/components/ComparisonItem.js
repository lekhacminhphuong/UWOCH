import React, { Component } from 'react';
import { Button } from 'reactstrap';

// renders each selected housing item in the list 
// allows users to remove items 
export class ComparisonItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <li>
                <span className="input-group-append">
                    <Button color="danger" type="button" onClick={(e) => {this.props.removeCallback(item)}}> 
                        <span className="fa fa-times" aria-label="remove" key={item.name}></span>
                        {item.name}
                    </Button>
                </span>
            </li>
        );
    }
}

