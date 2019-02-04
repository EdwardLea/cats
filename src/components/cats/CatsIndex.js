import React from 'react'
import axios from 'axios'

import CatCard from './CatCard'


class CatsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    axios.get('/api/cats')
      .then(res => this.setState({ cats: res.data }))
  }

  render(){
    if(!this.state.cats) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cats.map(cat =>
              <div className="column is-one-quarter" key={cat._id}>
                <CatCard {...cat} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CatsIndex
