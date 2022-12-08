import React, { Component } from 'react'

class Employee extends Component {
    render() {
        return (
            <div>
                <h2>Employee Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>EMployee Name:{this.props.user.name}</h2>
                <h3>Rahul Loc:{this.props.loc[2]}</h3>
                <button className="btn btn-success">Test </button>
            </div>
        )
    }
}

export default Employee