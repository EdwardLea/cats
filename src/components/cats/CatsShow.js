import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'


class CatsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    axios
      .delete(`/api/cats/${this.props.match.params.id}`,{
      })
      .then(() => {
        this.props.history.push('/cats')
      })
      .catch(err => console.log(err))

  }

  componentDidMount() {
    axios.get(`/api/cats/${this.props.match.params.id}`)
      .then(res => this.setState({ cat: res.data }))
  }

  render(){
    if(!this.state.cat) return null
    const { _id, name, age, image, breed, colour, gender } = this.state.cat
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Age: {age}</h4>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Breed: {breed}</h4>
                <h4 className="title is-4">Colour: {colour}</h4>
                <h4 className="title is-4">Gender: {gender}</h4>
                <hr />
                <Link to={`/cats/${_id}/edit`} className="button is-dark" >Edit </Link>
                <hr />
                <button className="button is-dark" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CatsShow
