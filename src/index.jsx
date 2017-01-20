import React from 'react'
import { render } from 'react-dom'
import Subscription from './Subscription'

const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='label'>ACCOUNT</div>
      <div className='links'>
        <div>Summary</div>
        <div className='active'>Subscription</div>
        <div>Billing</div>
      </div>

      <div className='label'>SECURITY</div>
      <div className='links'>
        <div>High Security</div>
        <div>Single sign-on</div>
        <div>Session configuration</div>
      </div>

      <div className='label'>INTEGRATIONS</div>
      <div className='links'>
        <div>API Explorer</div>
        <div>Data sharing</div>
        <div>Alert notifications</div>
        <div>Ticketing integrations</div>
        <div>Add integrations</div>
      </div>

      <div className='label'>PARTNERSHIPS</div>
      <div className='links'>
        <div>Partnerships</div>
      </div>

      <div className='label'>ESTABLISHED RELEASES</div>
      <div className='links'>
        <div>Java</div>
        <div>.NET</div>
      </div>

      <div className='label'>CONNECTED AGENTS</div>
      <div className='links'>
        <div>Connected agents</div>
      </div>
    </div>
  )
}

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='top'></div>
      <div className='bottom'>
        <span>Applications</span>
        <span>Service maps</span>
        <span>Key transactions</span>
        <span>Alerts</span>
      </div>
    </div>
  )
}

const PageHeader = () => {
  return (
    <div className='page-header'>
      <h1>Subscription</h1>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <PageHeader />
        <div className='flex flex-row'>
          <SideNav />
          <Subscription />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
