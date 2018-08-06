import React, { Component } from 'react'
import { createClient } from 'contentful'
//

class Home extends Component {
  render () {
    return (
      <div>
        <title>CM Business Solutions</title>
        <div id="home">
          <header id="intro">
            <h1 id="headline">CM Business Solutions</h1>
            <h4 id="subtitle">
              We ensure you’re doing the RIGHT THINGS, in the RIGHT WAY, at the RIGHT TIME.
        </h4>
          </header>
          <div id="tagline">
            <p>
              We work with organizations, large and small, in leveraging technology and data to solve problems and achieve business goals.
        </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

// export default withSiteData(() => (
  {/* <div>
    <title>CM Business Solutions</title>
    <div id="home">
      <header id="intro">
        <h1 id="headline">CM Business Solutions</h1>
        <h4 id="subtitle">
          We ensure you’re doing the RIGHT THINGS, in the RIGHT WAY, at the RIGHT TIME.
        </h4>
      </header>
      <div id="tagline">
        <p>
          We work with organizations, large and small, in leveraging technology and data to solve problems and achieve business goals.
        </p>
      </div>
    </div>
  </div> */}
// ))
