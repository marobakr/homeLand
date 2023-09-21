import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Context Provider
import HouseContextprovider from './components/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextprovider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HouseContextprovider>
)
