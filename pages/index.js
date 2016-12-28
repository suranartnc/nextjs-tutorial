import page from '../hocs/page'

class Homepage extends React.Component {
  static async getInitialProps() {
    const fetching = function() {
      return new Promise((resolve, reject) => {
        console.log('fetching...')
        setTimeout(() => {
          return resolve([
            {
              id: 1,
              title: 'Title 1'
            }
          ])
        }, 5000)
      })
    }
    const result = await fetching()
    console.log('result=', result)
    return {
      posts: result,
    }
  }

  renderPosts() {
    console.log(this.props)
    if (this.props.posts !== undefined) {
      return this.props.posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        )
      })
    }
    return null
  }

  render() {
    return (
      <div>
        <div>Homepage</div>
        {this.renderPosts()}
      </div>
    )
  }
}

export default page(Homepage)
