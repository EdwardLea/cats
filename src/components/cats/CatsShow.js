import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'


class CatsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    // this.handleDelete = this.handleDelete.bind(this)
  }

  // handleDelete(){
  //   axios
  //     .delete(`/cats/${this.props.match.params.id}`,{
  //       headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(() => {
  //       this.props.history.push('/cats')
  //     })
  //     .catch(err => console.log(err))
  //
  // }

  componentDidMount() {
    axios.get(`api/cats/${this.props.match.params.id}`)
      .then(res => this.setState({ cat: res.data }))
  }

  render(){
    if(!this.state.cat) return null
    const { _id, name, origin, image, tastingNotes } = this.state.cheese
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Origin: {origin}</h4>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt="name" />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Tasting Notes</h4>
                <p> {tastingNotes}</p>
                <hr />
                <Link to={`/cheeses/${_id}/edit`} className="button is-info" >Edit </Link>
                <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CatsShow
