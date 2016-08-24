import React, { Component } from 'react'

export class Search extends Component {
  static propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  }

  handleUpdate = (e) => {
    if (e.keyCode === 13) {
      this.props.handleSearch(e.target.value)
    }
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          placeholder={this.props.placeholder}
          onKeyUp={this.handleUpdate} />
      </div>
    )
  }
}
