import React, { Component } from 'react'
import cn from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import { Form as UIForm, Radio, Button, Icon } from 'semantic-ui-react'


export class Form extends Component {

  state = {
    peformValidation: false,
    loading: false,
    data: {
      nombre: '',
      apellido: '',
      actor: 'otra',
      count: 1,
      countVIP: 0,
    }
  }

  onChangeUI = (event, { name, value }) => {
    const { data } = this.state
    this.setState({ data: { ...data, [name] : value } })
  }

  onChangeInput = ({ target: { name, value } }) => {
    const { data } = this.state
    this.setState({ data: { ...data, [name] : value } })
  }
  
  onKeyPressCount = event => {
    if (!/\d/.test(event.key)) event.preventDefault()
  }

  onSubmit = async event => {
    const data  = { ...this.state.data, total: this.cost() }
    this.setState({ loading: true });
    const url = 'https://esmbuy46ni.execute-api.us-east-1.amazonaws.com/default/lucido'
    const options = { body: JSON.stringify(this.state.data), method: 'POST' }
    const response = await fetch(url, options)
    if (response.status >= 200 && response.status < 300) {
      const json = await response.json()
      this.props.onFormSubmit({
        total: data.total,
        passphrase: json.passphrase,
      });
      this.props.history.push('/pago')
    } else {
      alert(await response.text());  
      this.setState({ loading: false });
    }
  }

  incrementCount = () => {
    const { data } = this.state
    data.count = this.state.data.count + 1
    this.setState({ data })
  }

  decrementCount = () => {
    const { data } = this.state
    data.count = Math.max(0, this.state.data.count - 1)
    this.setState({ data })
  }

  incrementCountVIP = () => {
    const { data } = this.state
    data.countVIP = this.state.data.countVIP + 1
    this.setState({ data });
  }

  decrementCountVIP = () => {
    const { data } = this.state
    data.countVIP = Math.max(0, this.state.data.countVIP - 1)
    this.setState({ data })
  }

  cost() {
    return this.state.data.count * 300 + this.state.data.countVIP * 300
  }

  render() {
    return (
      <section className="form">
        <h1>Un Poco Sobre Usted</h1>

        <UIForm onSubmit={ this.onSubmit }>

          <UIForm.Field className="text">
            <label>Su nombre</label>
            <input
              value={ this.state.data.nombre }
              onChange={ this.onChangeInput }
              name="nombre"
            />
          </UIForm.Field>

          <UIForm.Field className="text">
            <label>Su apellido</label>
            <input
              value={ this.state.data.apellido }
              onChange={ this.onChangeInput }
              name="apellido"
            />
          </UIForm.Field>

          <p className='label'>Quien le invitó?</p>
          <UIForm.Field>
            <Radio
              label="Coral Haze"
              name="actor"
              value="Coral"
              checked={ this.state.data.actor == 'Coral' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Dalia Xiu"
              name="actor"
              value="Dalia"
              checked={ this.state.data.actor == 'Dalia' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Moira Ada"
              name="actor"
              value="Moira"
              checked={ this.state.data.actor == 'Moira' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Natalia Plascencia"
              name="actor"
              value="Natalia"
              checked={ this.state.data.actor == 'Natalia' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>
          <UIForm.Field>
            <Radio
              label="Otra bestia"
              name="actor"
              value="otra"
              checked={ this.state.data.actor == 'otra' }
              onChange={ this.onChangeUI }
            />
          </UIForm.Field>

          <label>Boletos Plateados ($300/persona)</label>
          <div className="ticket-incrementer">
            <div className="number">
              { this.state.data.count }
            </div>
            <div className="button" onClick={ this.incrementCount }>
              <Icon name="plus" />
            </div>
            <div className="button" onClick={ this.decrementCount }>
              <Icon name="minus" />
            </div>
          </div>

          <label>Boletos Dorados ($600/persona)</label>
          <div className="ticket-incrementer">
            <div className="number">
              { this.state.data.countVIP }
            </div>
            <div className="button" onClick={ this.incrementCountVIP }>
              <Icon name="plus" />
            </div>
            <div className="button" onClick={ this.decrementCountVIP }>
              <Icon name="minus" />
            </div>
          </div>

          <div className="cost">Costo total ${ this.cost() }</div>

          <button className={ cn("ui button", { loading: this.state.loading }) }>Listo</button>

        </UIForm>

      </section>
    )
  }
}

export default withRouter(Form);

