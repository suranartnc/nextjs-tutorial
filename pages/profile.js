import React from 'react'

import page from '../hocs/page'
import withAuth from '../hocs/withAuth'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>My Profile</div>
      </div>
    )
  }
}

export default withAuth(page(Profile))
