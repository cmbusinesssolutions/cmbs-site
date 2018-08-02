import React, { Component } from 'react'
import { createClient } from 'contentful';
//

 class About extends Component {
   constructor() {
     super()
     this.state = { 
       title: null,
       problem: null,
       valueProp: null,
       description: null,
       media: null,
       cta: null,
       price: null,
       demo: null, 
      }
   }

  componentWillMount() {
    const client = createClient({
      space: 'twlasw34206y',
      accessToken: 'd4d47521c5c779f043334df8ccbe249ded24ffcbd6755a5034cfb865d02e0058'
    })

    client.getEntry('11cBA9fgCgUCSKGcOwsgCU')
      .then(entry => {
        const content = entry.fields
        console.log(content)
        this.setState({ 
          title: content.itemName,
          problem: content.problemDescription,
          valueProp: content.valueProposition,
          description: content.itemDescription,
          media: content.itemMedia,
          cta: content.itemCallToAction,
          price: content.itemPrice,
          demo: content.itemDemo,  
        })
      }).catch(err => console.log(`Retrieving entry.fieldsful data error: ${err}`))

  }

  render() {
    return (
      <div>
        <title>About US | CM Business Solutions</title>
        <section id="about" className="section">
          <div className="container">
            <h1 className="section-title">{this.state.title}</h1>
            <div className="section-text">
              <p>{this.state.problem}</p>
              <p>{this.state.description}</p>
              <p>{this.state.valueProp}</p>
              <p>{this.state.cta}</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
 } 
 

export default About
