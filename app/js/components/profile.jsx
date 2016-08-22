import React, { Component } from 'react'

export class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    const { login, repos } = this.props.data

    return (
      <div className='profile'>
        <div className='info'>{ login }</div>
        <ul className='repos'>
          { repos.map((repo) => {
            return (
              <li key={repo.id}>
                <span>{repo.name}</span>
                <span>{repo.description}</span>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}
