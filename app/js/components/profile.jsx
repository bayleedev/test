import React, { Component } from 'react'

export class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    const { data } = this.props

    return (
      <div className='profile'>
        <div className='info'>
          { data.avatar_url && <img src={ data.avatar_url } alt={ data.name } /> }
          { data.name && <div className='fullName'>{ data.name }</div> }
          <div className='login'>{ data.login }</div>
          { data.bio && <div className='bio'>{ data.bio }</div> }
          <ul className='links'>
            {
              data.blog &&
              <li className='blog'>
                <i className='fa fa-internet-explorer' />
                <a href={ data.blog }>{ data.blog }</a>
              </li>
            }
            {
              data.email &&
              <li className='email'>
                <i className='fa fa-envelope' />
                { data.email }
              </li>
            }
            {
              data.location &&
              <li className='location'>
                <i className='fa fa-map-marker' />
                { data.location }
              </li>
            }
            <li className='repo-count'>
              <i className='fa fa-code-fork' />
              <span>{ data.public_repos } Repos</span>
            </li>
            <li className='joined'>
              <i className='fa fa-clock-o' />
              Joined { data.created_at }
            </li>
          </ul>
        </div>
        <ul className='repos'>
          { data.repos.map((repo) => {
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
