import React, { Component } from 'react'

import { Profile } from './profile'
import { Search } from '../components/search'
import { ErrorState } from '../components/error-state'
import { LoadingSpinner } from '../components/loading-spinner'
import { profileFetcher } from '../fetchers/profile'

export class SearchWrapper extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      query: '',
      loading: false,
      error: false,
    }
  }

  handleSearch = (query) => {
    profileFetcher(query).then((profile) => {
      if (this.state.query === query) {
        this.setState({
          profile,
          loading: false,
        })
      }
    }).catch(() => {
      if (this.state.query === query) {
        this.setState({
          loading: false,
          error: true,
        })
      }
    })
    this.setState({
      query,
      loading: true,
      error: false,
    })
  }

  render () {
    return (
      <div className='search-wrapper'>
        <Search
          placeholder='Search by org name...'
          handleSearch={this.handleSearch} />
        { this.state.error &&
            <ErrorState /> }
        { this.state.loading &&
            <LoadingSpinner /> }
        { !this.state.loading && this.state.profile &&
            <Profile data={this.state.profile} /> }
      </div>
    )
  }
}
