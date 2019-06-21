import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs } from "../actions"

import "./App.css"

const Smurf = ({ name, age, height }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{height}</p>
        </>
    )
}

class App extends Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }

    render() {
        return (
            <>
                {this.props.isLoading && <p>Loading...</p>}
                {this.props.error && <p>{this.props.error}</p>}
                {this.props.smurfs.map(smurf => (
                    <Smurf key={smurf.id} {...smurf} />
                ))}
            </>
        )
    }
}

const mapStateToProps = ({ error, isLoading, smurfs }) => ({
    error,
    isLoading,
    smurfs
})

const mapDispatchToProps = { fetchSmurfs }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
