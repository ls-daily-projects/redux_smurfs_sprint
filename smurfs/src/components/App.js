import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchSmurfs } from "../actions"
import SmurfList from "./SmurfList"

import "./App.css"

class App extends Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }

    render() {
        return (
            <>
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

const mapDispatchToProps = { fetchSmurfs }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
