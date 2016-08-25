import React, { Component } from 'react'

export class Repo extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  }

  render () {
    const { name, description } = this.props

    return (
      <li>
        <span>{name}</span>
        { description && <span>{description}</span> }
      </li>
    )
  }
}
