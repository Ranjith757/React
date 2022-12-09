import React, { Component } from 'react'

class Location extends Component {
    state = {
        Mexcico: false,
        Sydney: false,
        Paris: false
    }
    MexicoHandler = () => {
        this.setState({ Mexcico: !this.state.Mexcico })
    }
    SydneyHandler = () => {
        this.setState({ Sydney: !this.state.Sydney })
    }
    ParisHandler = () => {
        this.setState({ Paris: !this.state.Paris })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <div>
                        <input type="checkbox" onInput={this.MexicoHandler} /> Mexico
                    </div>
                    <div>
                        <input type="checkbox" onInput={this.SydneyHandler} /> Sydney
                    </div>
                    <div>
                        <input type="checkbox" onInput={this.ParisHandler} /> Paris
                    </div>
                </div>
                <div className="col-8">
                    {
                        this.state.Mexcico ? <><div className="card-body bg-dark text-white">
                            <p>
                                Mexico is the most popular city of USA.
                        </p>
                        </div></> : null
                    }
                    {
                        this.state.Sydney ? <> <div className="card-body bg-warning text-white">
                            <p>
                                Sydeny is the capital city of Ausrtalia.
                        </p>
                        </div></> : null
                    }
                    {
                        this.state.Paris ? <> <div className="card-body bg-danger text-white">
                            <p>
                            Paris is the capital city of France.
                        </p>
                        </div></> : null
                    }

                </div>
            </div>
        </div>
    }
}

export default Location