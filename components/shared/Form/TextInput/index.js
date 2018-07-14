import {Component, Fragment} from 'react'

export default class TextInputContainer extends Component {
  render() {
    const {label, name, placeholder, value, handleChange} = this.props

    return (
      <Fragment>
        <h1>{label}</h1>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}/>
      </Fragment>
    )
  }
}

