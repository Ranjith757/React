import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Components/Login'
import Location from './Components/Location'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login/>
                <Location />
            </div>
        )
    }
}

export default App