import React, { Component } from 'react'
import moment from 'moment'

export class Repo extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  }

  render () {
    const {
      name,
      description,
      language,
      updated_at,
      forks_count,
      stargazers_count
    } = this.props

    return (
      <li className='repo'>
        <div className={ 'container ' + language }>
          <h2>{ name }</h2>
          { description && <span className='description'>{description}</span> }
          <span className='updatedAt'>Updated { moment(updated_at).fromNow() }</span>
          <span className='badge stars'><span>{ stargazers_count }</span></span>
          <span className='badge forks'><span>{ forks_count }</span></span>
        </div>
      </li>
    )
  }
}
