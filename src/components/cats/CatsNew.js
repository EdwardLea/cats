import React from 'react'
import axios from 'axios'

import CatForm from './CatForm'

class CatsNew extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        age: '',
        colour: '',
        image: '',
        gender: '',
        breed: ''
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value}}){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('/api/cats',
        this.state.data)
      .then(() => this.props.history.push('/cats'))
      .catch((err) => console.log(err) )
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <CatForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default CatsNew
