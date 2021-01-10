import React, { Component } from 'react';

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                Order
                <select>
                <option >Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Higest">Higest</option>
                </select>
                </div>
                <div className="filter-price">
                Filter
                <select>
                    <option value="5000">2000 to 7000</option>
                    <option value="10000">7000 to 12000</option>
                    <option value="13000">12000 to 15000</option>
                    <option value="18000">15000 to 20000</option>
                </select>
                </div>
            </div>
        )
                            
    }
}