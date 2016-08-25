import React, { Component } from 'react'

import { Info } from '../components/info'
import { Repo } from '../components/repo'

export class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    const { data } = this.props

    return (
      <div className='profile'>
        <Info { ...data } />
        <ul className='repos'>
          { data.repos.map((repo) => {
            return (
              <Repo key={repo.id} { ...repo } />
            )
          }) }
        </ul>
      </div>
    )
  }
}
