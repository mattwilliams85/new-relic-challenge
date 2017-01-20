import React from 'react'

class Select extends React.Component {
  render () {
    return (
      <div>
        <div className='label'>{this.props.label}</div>
        <div className='select-wrap'>
          <select
            className='select'
            name={this.props.name}
            onChange={this.props.handleSelectChange}
          >
            {this.props.options.map(option =>
              <option key={option}>{option}</option>
            )}
          </select>
        </div>
      </div>
    )
  }
}

export default Select
