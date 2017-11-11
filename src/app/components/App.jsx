import React, { Component } from 'react'

import { incrementCount } from '../actions'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.store.getState()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState({
            count: this.props.store.getState()
        })
    }

    handleClick() {
        this.props.store.dispatch(incrementCount())
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increase Count</button>
            </div>
        )
    }
}