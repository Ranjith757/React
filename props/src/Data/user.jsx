import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {

    locations = ['Paris', 'New Delhi', 'Bangalore']
    user = {
        id: 2011,
        name: "Roman",
        email: "Roman75@king.com"
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