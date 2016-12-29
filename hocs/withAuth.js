import { Component, PropTypes } from 'react'

export default function withAuth(AuthComponent) {
  return class WithAuth extends Component {
    state = {
      isLoading: true,
    }
    componentDidMount() {
      const isAuthenticated = false
      if (!isAuthenticated) {
        this.props.url.replace('/')
      }
      this.setState({ isLoading: false })
    }
    render() {
        return (
          <div>
          {this.state.isLoading ? (
              <div>LOADING....</div>
            ) : (
              <AuthComponent {...this.props} />
            )}
          </div>
        )
      }
  }
}
