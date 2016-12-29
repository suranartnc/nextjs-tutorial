import React from 'react'

import page from '../hocs/page'
import requireAuth from '../hocs/requireAuth'

class Profile extends React.Component {
  componentDidMount() {
    const isAuthenticated = false
    if (!isAuthenticated) {
      this.props.url.replace('/')
    }
  }
  render() {
    return (
      <div>
        <div>My Profile</div>
      </div>
    )
  }
}

export default requireAuth(page(Profile))
