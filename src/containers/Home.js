import React, { Component } from 'react'
import { createClient } from 'contentful'
import { Link } from 'react-static'
//

const flattened = (data, name) => {
  let arr = data.map(entry => entry).filter(item => item.itemName === name)
  return arr[0]
}

class Home extends Component {
  constructor() {
    super()
    this.state = { entries: null }
  }

  componentDidMount() {
    const client = createClient({
      space: 'twlasw34206y',
      accessToken: 'd4d47521c5c779f043334df8ccbe249ded24ffcbd6755a5034cfb865d02e0058'
    })

    client.getEntries({ 'content_type': 'productAndService'})
      .then((response) => {
        let entries = response.items.map(entry => entry.fields)
        this.setState({entries: entries})
      })
      .catch(console.error)
  }

  render () {
    let dev
    let dataSvcs
    let cio
    if (this.state.entries) {
      dev = flattened(this.state.entries, "Software Development")
      dataSvcs = flattened(this.state.entries, "Data Engineering & Analytics")
      cio = flattened(this.state.entries, "Virtual CIO")

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
            <div className="cta-group">
              <button className="cta-btn"><Link to="#services" className="link-design">Learn More</Link></button>
            </div>
          </div>
          <section id="services" className="section">
            <div className="container">
              <h2 className="section-title">Services</h2>
              <div className="section-text">
                <div className="services-wrapper">
                  <div className="services-text">
                    <h4 className="service-name">{dev.itemName}</h4>
                    <p>{dev.itemSummary}</p>
                    <div className="cta-group">
                      <button className="info-btn">
                        <Link to="/software_dev" className="link-design">Learn More</Link>
                      </button>
                    </div>
                  </div>
                  <div className="services-text">
                    <h4 className="service-name">{dataSvcs.itemName}</h4>
                    <p>{dataSvcs.itemSummary}</p>
                    <div className="cta-group">
                      <button className="info-btn">
                        <Link to="/data_services" className="link-design">Learn More</Link>
                      </button>
                    </div>
                    
                  </div>
                  <div className="services-text">
                    <h4 className="service-name">{cio.itemName}</h4>
                    <p>{cio.itemSummary}</p>
                    <div className="cta-group">
                      <button className="info-btn">
                        <Link to="/cio" className="link-design">Learn More</Link>
                      </button>
                    </div>

                  </div>
                </div>
              </div>              
            </div>
          </section>
        </div>
      )
    }
    return <div>Loading...</div>;
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
