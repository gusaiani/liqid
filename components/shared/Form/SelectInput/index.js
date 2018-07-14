import {Component, Fragment} from 'react'

export default class SelectInputContainer extends Component {
  render() {
    const {label, name, placeholder, value, options, handleChange} = this.props

    return (
      <Fragment>
        <h1>{label}</h1>
        <select onChange={handleChange} defaultValue={value}>
          {options.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            )
          })}
        </select>
      </Fragment>
    )
  }
}

