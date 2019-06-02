import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form as UIForm, Radio, Button, Icon } from 'semantic-ui-react'


export default class Form extends Component {

  state = {
    who: null,
    count: 1,
  }

  onChangeUI = (event, { name, value }) => {
    this.setState({ [name] : value })
  }

  onChangeInput = ({ target: { name, value }}) => {
    this.setState({ [name] : value })
  }
  
  onKeyPressCount = event => {
    if (!/\d/.test(event.key)) event.preventDefault()
  }

  onSubmit = event => {
    console.log(this.state);
    this.props.history.push('/pago')
  }

  incrementCount = () => this.setState({ 'count': this.state.count + 1 });

  decrementCount = () => this.setState({ 'count': this.state.count - 1 });

  render() {
    return (
      <section className="form">
        <h1>Un Poco Sobre Ti</h1>

        <UIForm onSubmit={ this.onSubmit }>
          <UIForm.Field>
            <label>Su nombre</label>
            <input placeholder="" />
          </UIForm.Field>
          <UIForm.Field>
            <label>Su apellido</label>
            <input placeholder="" />
          </UIForm.Field>

          <p>Quien le invitó?</p>
          <UIForm.Field>
            <Radio
              label="Coral Haze"
              name="who"
              value="Coral"
              checked={ this.state.who == 'Coral' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Dalia Xiu"
              name="who"
              value="Dalia"
              checked={ this.state.who == 'Dalia' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Moira Ada"
              name="who"
              value="Moira"
              checked={ this.state.who == 'Moira' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Natalia Plascencia"
              name="who"
              value="Natalia"
              checked={ this.state.who == 'Natalia' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>

          <UIForm.Field>
            <label>Cantidad de boletos</label>
            <input
              name="count"
              value={ this.state.count }
              onChange={ this.onChangeInput }
              onKeyPress={ this.onKeyPressCount }
            />
            <Button onClick={ this.incrementCount }>
              <Icon name="plus" />
            </Button>
            <Button onClick={ this.decrementCount }>
              <Icon name="minus" />
      </Button>
          </UIForm.Field>

          <div>
            ${ this.state.count * 300 }
          </div>

          <button>Listo</button>

        </UIForm>

      </section>
    )
  }
}
