import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)