import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import Welcome from './Welcome.js';
import Rules from './Rules.js';
import Form from './Form.js';
import Payment from './Payment.js';

export default function App(props) { 
  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact component={ Welcome } />
      <Route path="/reglas" component={ Rules } />
      <Route path="/formulario" component={ Form } />
      <Route path="/pago" component={ Payment } />
    </Router>
  );
}
