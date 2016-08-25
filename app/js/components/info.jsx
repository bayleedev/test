import React, { Component } from 'react'
import moment from 'moment'

export class Info extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    public_repos: React.PropTypes.number.isRequired,
    created_at: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string,
    bio: React.PropTypes.string,
    blog: React.PropTypes.string,
    email: React.PropTypes.string,
    location: React.PropTypes.string,
  }

  render () {
    const {
      name,
      login,
      public_repos,
      created_at,
      avatar_url,
      bio,
      blog,
      email,
      location,
    } = this.props

    const createdAtDisplay = moment(created_at).format('ll')

    return (
      <div className='info'>
        { avatar_url && <img src={ avatar_url } alt={ name } /> }
        { name && <div className='fullName'>{ name }</div> }
        <div className='login'>{ login }</div>
        { bio && <div className='bio'>{ bio }</div> }
        <ul className='links'>
          {
            blog &&
            <li className='blog'>
              <i className='fa fa-internet-explorer' />
              <a href={ blog }>{ blog }</a>
            </li>
          }
          {
            email &&
            <li className='email'>
              <i className='fa fa-envelope' />
              { email }
            </li>
          }
          {
            location &&
            <li className='location'>
              <i className='fa fa-map-marker' />
              { location }
            </li>
          }
          <li className='repo-count'>
            <i className='fa fa-code-fork' />
            <span>{ public_repos } Repos</span>
          </li>
          <li className='joined'>
            <i className='fa fa-clock-o' />
            Joined on { createdAtDisplay }
          </li>
        </ul>
      </div>
    )
  }
}
