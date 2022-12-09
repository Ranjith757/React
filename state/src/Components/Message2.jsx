import React from 'react'
class Message extends React.Component {

    state = {
        msg: "Hello...."
    }
    gmHandler = () => {
        this.setState({ msg: "GM Roman" })
    }
    gnHandler = () => {
        this.setState({ msg: "GN Raina" })
    }
    render() {
        console.log("Render Method -executing")
        return <div>
            <h1>Message:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM  </button>
            <button onClick={this.gnHandler}>GN </button>
        </div >
    }
}
export default Message