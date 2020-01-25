import React, { Component } from 'react';
import { Button } from 'reactstrap';

// renders each housing item 
export class OptionItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <img src={item.url} alt={item.name} />
                <p>{item.name}</p>
                <Button outline color="warning" className="add-cart" name={item.name} onClick={(e) => { this.props.addCallBack(item) }}>{item.status}</Button>
            </div>
        );
    }
}

