import React from 'react'
class Message extends React.Component {
    message = "Hello,"
    gmHandler = () => {
        this.message = "GM Jagan"

        // console.log("Test Case 123")
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Message:{this.message}</h1>
            <button onClick={this.gmHandler} className="btn btn-lg mr-2" >GM</button>
            <button className="btn btn-lg">GN</button>
        </div>
    }
}
export default Message