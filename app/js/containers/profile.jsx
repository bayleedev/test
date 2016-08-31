import React, { Component } from 'react'

import { Info } from '../components/info'
import { Repo } from '../components/repo'
import { transformRepos } from '../transform/repos'

export class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    const { data } = this.props

    return (
      <div className='profile'>
        <Info { ...data } />
        <ol className='repos'>
          { transformRepos(data.repos).map((repo) => {
            return (
              <Repo key={repo.id} { ...repo } />
            )
          }) }
        </ol>
      </div>
    )
  }
}
