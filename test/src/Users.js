import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    state = {
        items: [
            {
                id: '1',
                avatar: 'https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                itemName: 'Bag'
            },
            {
                id: '2',
                avatar: 'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                itemName: 'Watch'
            },
            {
                id: '3',
                avatar: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                itemName: 'Accessories'
            }

        ]
    }
    render() {
        return (
            <div style={itemStyle}>
                {this.state.items.map(item => {
                    return <UserItem key={item.id} item={item} sum1={this.props.sum} sub1={this.props.sub} />
                })}
            </div>
        )
    }
}
const itemStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1em'
};
export default Users
