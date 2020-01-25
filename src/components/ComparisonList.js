import React, { Component } from 'react';
import { ComparisonItem } from './ComparisonItem';

// renders selected housing items as a list that displays under housing options
export class ComparisonList extends Component {
    render() {
        const { items } = this.props;
        const selectedItems = items.map((item) => {
            return <ComparisonItem item={item} removeCallback={(e) => this.props.removeCallback(e)} />;
        })
        return (
            <div className="list">
                <ul>
                    <li key={selectedItems}>
                        {selectedItems}
                    </li>
                </ul>
            </div>
        );
    }
}

