import React, { Component } from 'react'

export class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    const { login, repos } = this.props.data

    return (
      <div className='profile'>
        <div className='title'>{ login }</div>
        <div className='repos'>
          { repos.map((repo) => {
            return (
              <div key={repo.id}>
                <span>{repo.name}</span>
                <span>{repo.description}</span>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}
