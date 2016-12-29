import { Component, PropTypes } from 'react'
import Router from 'next/router'

export default function requireAuth(WrappedComponent) {
  class RequireAuth extends Component {

    componentDidMount() {
      const isAuthenticated = false
      if (!isAuthenticated) {
        Router.push('/')
      }
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
  return RequireAuth
}
