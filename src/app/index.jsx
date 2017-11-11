import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'

let store = createStore(reducer)

import App from './components/App.jsx'

ReactDOM.render(<App store={store} />, document.getElementById('app'))