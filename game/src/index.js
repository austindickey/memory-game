import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()