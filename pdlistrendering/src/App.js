import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
            </div>
        )
    }
}

export default App