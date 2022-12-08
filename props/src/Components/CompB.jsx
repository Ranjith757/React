import React from 'react'
class CompB extends React.Component {


    render() {
        return <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.x)}</pre>
            {/*     <h2>Employee Name:{this.props.name}</h2> */}
        </div>
    }
}
export default CompB