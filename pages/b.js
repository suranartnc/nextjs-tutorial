import Head from 'next/head'

function greet() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img src="/static/images/React.js_logo.png" width="300" height="300" alt=""/>
      <p>Hello World!</p>
    </div>
  )
}

export default greet
