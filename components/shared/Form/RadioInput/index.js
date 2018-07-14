import {Component, Fragment} from 'react'

export default class RadioInputContainer extends Component {
  render() {
    const {label, name, placeholder, value, options, handleChange} = this.props

    return (
      <Fragment>
        <h1>{label}</h1>
          {options.map(option => {
            return <div key={option.value} className="radio-container">
              <input
                type="radio"
                name={name}
                onChange={handleChange}
                checked={option.value == value}
                value={option.value} />
              <label htmlFor={name}>{option.label}</label>
            </div>
          })}
      </Fragment>
    )
  }
}

