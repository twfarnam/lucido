import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Welcome from './Welcome.js'
import Rules from './Rules.js'
import Form from './Form.js'
import List from './List.js'
import Payment from './Payment.js'

export default class App extends React.Component { 

  state = {
    passphrase: '',
    total: 0,
  }

  onFormSubmit = (data) => this.setState(data)

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Route path="/list" exact component={ List } />
        <Route path="/" exact component={ Welcome } />
        <Route path="/reglas" component={ Rules } />
        <Route path="/formulario" render={ () =>
          <Form onFormSubmit={ this.onFormSubmit } />
        } />
        <Route path="/pago" component={ () =>
          <Payment { ...this.state } />
        } />
      </Router>
    )
  }

}
