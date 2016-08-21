import React, { Component } from 'react'

export class Search extends Component {
  static propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
  }

  handleUpdate = (e) => {
    if (e.keyCode === 13) {
      this.props.handleSearch(e.target.value)
    }
  }

  render () {
    return (
      <input onKeyUp={this.handleUpdate} />
    )
  }
}
