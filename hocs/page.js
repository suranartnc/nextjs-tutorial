import { Component, PropTypes } from 'react'

import HtmlHead from '../components/HtmlHead'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page(WrappedComponent) {
  class Page extends Component {
    render() {
      return (
        <div>
          <HtmlHead />
          <Header />
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      )
    }
  }
  return Page
}
