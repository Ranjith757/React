import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {

    locations = ['Wayanad', 'New Delhi', 'Bangalore']
    user = {
        id: 101,
        name: "Rahul Gandhi",
        email: "Rahul@pm.com"
    }
    render() {
        return (
            <div>
                <h1>User component.......</h1>
                <hr />

                <Employee loc={this.locations} user={this.user} />
            </div>
        )
    }
}

export default User