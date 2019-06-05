import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="intro">Teatro Lúcido Presenta</div>

      <h1>Bestiario</h1>

      <time>15 Junio 2018, 10:10pm</time>

      <main>
        <img className="cat" src="cat.png"/>
        <div className="text">
          <p>Un Bestiario es el jardín de nuestros delirios, la fiesta de nuestras fiebres, el escenario para relinchar nuestras añoranzas, maullar nuestra maravilla, sumergimos hasta los huesos en el pozo de lo orínico</p>
          <p>¡Bienvenidos sean a ulular entre los insaciables, los lunáticos, los amantes de todo aquello que llamamos mágico!</p>
        </div>
      </main>

      <p>
        <Link className="button" to="/reglas">Entrar</Link>
      </p>

    </section>
  )
}
