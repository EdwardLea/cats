import React from 'react'
import axios from 'axios'


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
            {this.state.cats.map((cat, i) =>
              <p key={i}> {cat.name} </p>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CatsIndex
