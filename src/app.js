import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import CatsIndex from './components/cats/CatsIndex'

class App extends React.Component {
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
    if(!this.state) return null
    return(
      <CatsIndex />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
