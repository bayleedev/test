import React, { Component } from 'react'

import { Search } from '../components/search'
import { Profile } from '../components/profile'
import { profileFetcher } from '../fetchers/profile'

export class SearchWrapper extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      query: '',
    }
  }

  handleSearch = (query) => {
    profileFetcher(query).then((profile) => {
      if (this.state.query === query) {
        this.setState({ profile })
      }
    })
    this.setState({
      query,
    })
  }

  render () {
    return (
      <div className='search-wrapper'>
        <Search handleSearch={this.handleSearch} />
        { this.state.profile && <Profile data={this.state.profile} /> }
      </div>
    )
  }
}
