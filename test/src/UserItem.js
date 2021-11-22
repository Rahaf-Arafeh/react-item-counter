import React, { Component } from 'react'

export class UserItem extends Component {
    state = {
        counter: 0,
    };


    minuseClick = () => {
        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter < 1) {
            this.setState({ counter: 0 })
        }
        this.props.sub1();
    }


    plusClick = () => {
        this.setState({ counter: this.state.counter + 1 });
        this.props.sum1();
    }


    render() {
        const { avatar, itemName } = this.props.item;
        return (
            <div>
                <div className='card text-center'>
                    <img src={avatar} alt='' style={{ width: '20em' }} />
                    <h3>{itemName}</h3>
                    <div><i class="far fa-minus-square" onClick={this.minuseClick}></i>
                        {/* <input type='text' value={this.state.counter} /> */}
                        <h2>{this.state.counter}</h2>
                        <i class="far fa-plus-square" onClick={this.plusClick}></i></div>
                </div>

            </div>
        )
    }
}

export default UserItem;
