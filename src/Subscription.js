import React from 'react'
import Title from './Title'
import Button from './Button'
import Divider from './Divider'
import Select from './Select'
import features from './features'

class Subscription extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'APM Subscription',
      description: 'New Relic APM gives you grouped view for quick diagnosis of domain-level problems. Drill down into specific requests to see performance metrics by response time, throughput and data transfer size.',
      units: '',
      pricing: 'Cloud-based',
      level: 'Pro',
      commitment: 'Annual',
      features: features,
      disabled: true
    }

    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleUnitChange (event) {
    let units = parseInt(event.target.value)
    this.setState({units: units})
    this.proReq(units, this.state.level)
  }

  handleSelectChange (event) {
    let name = event.target.name
    let value = event.target.value
    let newState = {}
    newState[name] = value
    this.setState(newState)
    if (name === 'level') this.proReq(this.state.units, value)
  }

  proReq (units, level) {
    if (units < 5000 && level === 'Pro') {
      this.setState({error: 'Pro requires a minimum of 5500CU'})
    } else {
      this.setState({error: '', disabled: false})
    }
  }

  unitCost () {
    let units = this.state.units
    if (!units) return '$0.00'
    return '$' + (this.unitMultiplyer() * units).toFixed(2)
  }

  unitMultiplyer () {
    if (this.state.pricing === 'Cloud-based') return 0.00083333
    return 0.0002666
  }

  render () {
    return (
      <div className='container flex nr-subscription'>

        <div className='flex-50 padding'>
          <Title
            title={this.state.title}
            description={this.state.description}
          />

          <div className='header'>PURCHASE OPTIONS</div>

          <div className='form-item'>
            <Select
              name='pricing'
              label={'1. Select pricing model'}
              options={['Cloud-based', 'Self-hosted']}
              handleSelectChange={this.handleSelectChange}
            />
            <div>
              <b>Cloud-based: </b>
              Ideal when running dynamic computing enviroments in the cloud.
            </div>
            <div>
              <b>Self-hosted: </b>
              Ideal when running static environments consisting of hosts managed in your own data center.
            </div>
          </div>

          <div className='form-item'>
            <Select
              name='level'
              label={'1. Select level'}
              options={['Pro', 'Essentials', 'Lite']}
              handleSelectChange={this.handleSelectChange}
            />
            <div>See the features chart for level comparisons.</div>
          </div>

          <div className='form-item'>
            <Select
              name='commitment'
              label={'1. Select commitment'}
              options={['Annual', 'Monthly']}
              handleSelectChange={this.handleSelectChange}
            />
            <div>
              <b>Annual: </b>
              Best price option (annual contract at a discounted rate).
            </div>
            <div>
              <b>Monthly: </b>
              Flexbile option (monthly contract at the retail rate).
            </div>
          </div>

          <div className='form-item'>
            <div className='label'>4. Enter number of Compute Units</div>
            <input
              type='number'
              className={this.state.error ? 'error' : ''}
              placeholder='Example: 8000'
              min='5000'
              step='500'
              value={this.state.units}
              onChange={this.handleUnitChange}
            />
            <div>
              <b>Compute Units: </b>
              (# of CPU Cores + GB of RAM) x time used. Increments of 500
            </div>
            <div className='error'>{this.state.error}</div>
          </div>
        </div>

        <div className='flex-50 padding'>

          <div className='text-right cart'>
            <span className='icon'></span>
            <i className='material-icons'>keyboard_arrow_down</i>
          </div>

          <div className='card'>
            <h3>Your APM subscription total</h3>
            <br />
            <div className='flex flex-row space-between'>
              <div>
                <h3><b>{this.state.level}, {this.state.commitment}</b></h3>
              </div>
              <div className='text-right'>
                <div>{this.state.units | 0} CU</div>
                <div>({this.unitMultiplyer()}/hosts)</div>
              </div>
            </div>

            <Divider />
              <div className={`text-right ${this.state.disabled || !this.state.units ? 'disabled' : ''}`}>
                <div className='cost'>{this.unitCost()}</div>
                <div>PER MONTH</div>
              </div>
            <Divider />

            <div className='flex flex-row flex-end'>
              <Button
                text='Add to cart'
                disabled={this.state.disabled || !this.state.units}
              />
            </div>

          </div>

          <div className='features'>
            <div className='header flex flex-row space-between'>
              <div>LEVEL FEATURES</div>
              <div>
                <span>LT</span>
                <span className='nr-color-green'>ESS</span>
                <span className='nr-color-blue'>PRO</span>
              </div>
            </div>

            <div>
              {this.state.features.map((ft, i) => {
                return (
                  <div className='flex flex-row space-between feature-item' key={i}>
                    <div>{ft.text}</div>
                    <div>
                      <i className={`material-icons ${ft.lt? '' : 'hide'}`}>check</i>
                      <i className={`material-icons nr-color-green ${ft.ess? '' : 'hide'}`}>check</i>
                      <i className={`material-icons nr-color-blue ${ft.pro? '' : 'hide'}`}>check</i>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Subscription
