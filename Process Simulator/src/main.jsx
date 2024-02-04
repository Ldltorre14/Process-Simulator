import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './components/Container/Container'
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <section className='main-container'>
    <h1 className='main-header'>Process Simulator</h1>
    <Container className="settings-container">
      <h2 className="settings-header">Settings</h2>
    </Container>
    <div className="batch-container">
      <Container className="pending-batch-container">
        <h2 className='pending-header'>Pending Batch</h2>
      </Container>
      <Container className="running-batch-container">
        <h2 className='running-header'>Running Batch</h2>
      </Container>
      <Container className="finished-batch-container">
        <h2 className='finished-header'>Finished Batch</h2>
      </Container>
    </div>
  </section>
)  
  

