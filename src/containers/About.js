import React, { Component, createElement } from 'react'
import { createClient } from 'contentful'
import marksy from 'marksy'
//

const getMarkup = field => {
  if (!field) return null
  const compile = marksy({
    createElement,
    elements: {}
  })
  return compile(field).tree
}

 class About extends Component {
   constructor() {
     super()
     this.state = { 
       title: null,
       summary: null,
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

    client.getAsset('4QAIiywM6AOoC6W6UiMwkU')
      .then((asset) => console.log('The asset is: ', asset))
      .catch(console.error)

    client.getEntry('11cBA9fgCgUCSKGcOwsgCU')
      .then(entry => {
        const content = entry.fields
        this.setState({ 
          title: content.itemName,
          summary: content.itemSummary,
          problem: content.problemDescription,
          valueProp: content.valueProposition,
          description: content.itemDescription,
          media: content.itemMedia,
          cta: content.itemCallToAction,
          price: content.itemPrice,
          demo: content.itemDemo,  
        })
        console.log(`Item media is: `, this.state.media)
      })
      .catch(err => console.log(`Retrieving entry.fieldsful data error: ${err}`))
  }

  render() {
    let title
    let problem
    let description
    let valueProp
    let cta

    if (this.state.title) {
      title = getMarkup(this.state.title)
    }
    if (this.state.problem) {
      problem = getMarkup(this.state.problem)
    }
    if (this.state.description) {
      description = getMarkup(this.state.description)
    }
    if (this.state.valueProp) {
      valueProp = getMarkup(this.state.valueProp)
    }
    if (this.state.cta) {
      cta = getMarkup(this.state.cta)
    }

    return (
      <div>
        <title>CM Business Solutions | About US </title>
        <section id="about" className="section">
          <div className="container">
            <h1 className="section-title">{title}</h1>
            <div className="section-text">
              {this.state.summary}
              {valueProp}
              {description}
              {cta}
            </div>
          </div>
        </section>
      </div>
    )
  }
 } 
 

export default About
