import React, { Component } from 'react'

import { incrementCount } from '../actions'
import CountWidget from '../containers/CountWidget.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <CountWidget store={this.props.store} />
            </div>
        )
    }
}