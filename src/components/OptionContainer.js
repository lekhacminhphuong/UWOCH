import React, { Component } from 'react';
import { OptionItem } from './OptionItem';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// includes "OptionItem" 
// renders Preference that contains two checkboxes 
// and renders different housing options based on what users select
export class OptionContainer extends Component {
    render() {
        let items = this.props.items;
        let optionItems = items.map((item) => {
            return <OptionItem item={item} addCallBack={(e) => { this.props.addCallBack(e) }} />;
        })

        return (
            <div>
                <h2>Options</h2>
                <form>
                    <h5 className="pref">Preferences:</h5>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" defaultChecked={this.props.private} onChange={this.props.privateCallback} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Private Bath</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" defaultChecked={this.props.community} onChange={this.props.communityCallback} />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Community Bath</label>
                    </div>
                </form>
                <div className="housing-options row justify-content-center">
                    {optionItems}
                </div>
            </div>
        );
    }
}

