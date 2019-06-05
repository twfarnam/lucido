import React from 'react'

export default function Payment({ total, passphrase }) {
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
            <td>${ total }</td>
          </tr>
          <tr>
            <td>Concepto</td>
            <td>{ passphrase }</td>
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
