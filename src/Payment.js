import React from 'react'
import { serverlessURL } from './App'
import { Loader } from 'semantic-ui-react'

export default class Payment extends React.Component {

  state = {
    loading: true,
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    console.log({ id })
    const response = await fetch(serverlessURL + `?id=${ id }`)
    if (response.status >= 200 && response.status < 300) {
      const { total, passphrase } = await response.json()
      console.log({ total, passphrase })
      this.setState({ total, passphrase, loading: false })
    } else {
      alert(await response.text())
      this.setState({ loading: false })
    }
  }

  render() {
    // return <Loader />;
    if (this.state.loading) return <Loader />;

    return (
      <section className="payment">

        <h1>¡Gracias!</h1>

        <p>Para confirmar su asistencia, favor de pagar sus boletos con transferencia a la siguente cuenta</p>

        <table>
          <tbody>
            <tr>
              <td>Banco</td>
              <td>Citibanamex</td>
            </tr>
            <tr>
              <td>Clabe</td>
              <td>CLABE DE MOIRA</td>
            </tr>
            <tr>
              <td>Cantidad</td>
              <td>${ this.state.total }</td>
            </tr>
            <tr>
              <td>Concepto</td>
              <td>{ this.state.passphrase }</td>
            </tr>
          </tbody>
        </table>

        <div>15 Junio 2018, 10:10pm</div>

        <div>
          <div>Teatro Lúcido</div>
          <div>Calle Dr. Enrique González Martínez 234</div>
          <div>Santa María la Ribera</div>
        </div>

        <iframe src="https://maps.google.com/maps?q=teatro%20lucido&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>

      </section>
    )
  }

}
