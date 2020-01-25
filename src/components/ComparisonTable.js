import React, { Component } from 'react';

// generates the table from selected list 
// compares differnt housing options 
export class ComparisonTable extends Component {
    render() {
        let items = this.props.items;
        return (
            <div className="search-table-outter wrapper">
                <table className="housing-table search-table inner">
                    <tbody>
                        <TableHeader items={items} />
                        <LocationRow items={items} />
                        <PriceRow items={items} />
                        <AgreementDurationRow items={items} />
                        <RoomTypeRow items={items} />
                        <DiningNearbyRow items={items} />
                        <LLCRow items={items} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export class TableHeader extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>&nbsp;</td>
                {
                    items.map(item => {
                        return <td key={item.name}>{item.name}</td>
                    })
                }
            </tr>
        )
    }
}

export class LocationRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Location</td>
                {
                    items.map(item => {
                        return <td key={item.location}>{item.location}</td>
                    })
                }
            </tr>
        )
    }
}

export class PriceRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Price</td>
                {
                    items.map(item => {
                        return <td key={item.price}>{item.price}</td>
                    })
                }
            </tr>
        )
    }
}

export class AgreementDurationRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Agreement Duration</td>
                {
                    items.map(item => {
                        return <td key={item.agreementDuration}>{item.agreementDuration}</td>
                    })
                }
            </tr>
        )
    }
}

export class RoomTypeRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Room Type</td>
                {
                    items.map(item => {
                        return <td key={item.roomType}>{item.roomType}</td>
                    })
                }
            </tr>
        )
    }
}

export class DiningNearbyRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Dining Nearby</td>
                {
                    items.map(item => {
                        return <td key={item.diningNearby}>{item.diningNearby}</td>
                    })
                }
            </tr>
        )
    }
}

export class LLCRow extends Component {
    render() {
        let items = this.props.items;
        return (
            <tr>
                <td>Living Learning Community</td>
                {
                    items.map(item => {
                        return <td key={item.livingLearningCommunities}>{item.livingLearningCommunities}</td>
                    })
                }
            </tr>
        )
    }
}