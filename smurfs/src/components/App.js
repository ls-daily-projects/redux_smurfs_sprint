import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs, addSmurf } from "../actions"
import SmurfList from "./SmurfList"
import AddSmurfForm from "./AddSmurfForm"

import "./App.css"

class App extends Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }

    render() {
        return (
            <>
                <AddSmurfForm didSubmitSmurf={this.props.addSmurf} />
                {this.props.isLoading && <p>Loading...</p>}
                {this.props.error && <p>{this.props.error}</p>}
                <SmurfList smurfs={this.props.smurfs} />
            </>
        )
    }
}

const mapStateToProps = ({ error, isLoading, smurfs }) => ({
    error,
    isLoading,
    smurfs
})

const mapDispatchToProps = { fetchSmurfs, addSmurf }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
