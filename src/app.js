import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import CatsIndex from './components/cats/CatsIndex'
import CatsEdit from './components/cats/CatsEdit'
import CatsNew from './components/cats/CatsNew'
import Navbar from './components/common/Navbar'
import CatsShow from './components/cats/CatsShow'
import Home from './components/Home'

import 'bulma'

import './style.scss'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      cats: []
    }
  }

  render(){
    if(!this.state) return null
    return(
      <BrowserRouter>
        <main>
          <Navbar / >
          <Switch>
            <Route path="/cats/new" component={CatsNew} />
            <Route path="/cats/:id/edit" component={CatsEdit} />
            <Route path="/cats/:id" component={CatsShow} />
            <Route path="/cats" component={CatsIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
