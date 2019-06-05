import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Welcome from './Welcome.js'
import Rules from './Rules.js'
import Form from './Form.js'
import List from './List.js'
import Payment from './Payment.js'

export const serverlessURL = (
  'https://esmbuy46ni.execute-api.us-east-1.amazonaws.com/default/lucido'
);

export default function App() { 
  return (
    <Router>
      <ScrollToTop />
      <Route path="/list" exact component={ List } />
      <Route path="/" exact component={ Welcome } />
      <Route path="/reglas" component={ Rules } />
      <Route path="/formulario" component={ Form } />
      <Route path="/pago/:id" component={ Payment } />
    </Router>
  )
}

