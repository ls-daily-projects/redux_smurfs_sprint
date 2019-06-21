import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs, addSmurf, editSmurf, deleteSmurf } from "../actions"
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
                <SmurfList
                    smurfs={this.props.smurfs}
                    didEditSmurf={this.props.editSmurf}
                    didRemoveSmurf={this.props.deleteSmurf}
                />
            </>
        )
    }
}

const mapStateToProps = ({ error, isLoading, smurfs }) => ({
    error,
    isLoading,
    smurfs
})

const mapDispatchToProps = { fetchSmurfs, addSmurf, editSmurf, deleteSmurf }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
