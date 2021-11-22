import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
    static defaultProps = {
        title: 'Shopping Center',
        icon: 'fas fa-shopping-bag'
    };
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <div className='navbar bg-dark'>
                <h1><i className={this.props.icon}></i> {this.props.title}</h1>
            </div>
        )
    }
}
/* <h1><i class="fas fa-shopping-bag"></i> Shopping Center</h1> */
export default Navbar
