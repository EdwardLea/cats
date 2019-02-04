import React from 'react'
import axios from 'axios'

import CatForm from './CatForm'

class CatEdit extends React.Component {

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

  componentDidMount() {
    axios
      .get(`/api/cats/${this.props.match.params.id}`)
      .then(res => this.setState( {data: res.data}))
  }

  handleChange({target: {name, value}}){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .put(`/api/cats/${this.props.match.params.id}`,
        this.state.data)
      .then(() => this.props.history.push(`/cats/${this.props.match.params.id}`))
      .catch((err) => console.log(err))
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

export default CatEdit
