import React, { Component } from 'react'

export class Notes extends Component {
  render () {
    return (
      <div>
        <div className='sidebar'></div>
        <div className='note'>
          <div className='title'>Untitled note 0</div>
          <div className='notetaker'></div>
          <div className='preview'></div>
        </div>
      </div>
    )
  }
}
