import React from 'react';
import { Link } from "react-router-dom";

export default function Rules() {
  return (
    <section className="rules">
      
      <h1>Instrucciones del Juego</h1>

      <p>Para que el encantamiento, en la medida de lo imposible surta un sublímador efecto en el inconsciente de nuestros invitados, se reuga atender maniáticamente a las instrucciones del juego</p>

      <ul>
        <li>Se debe asistir solo, como se asiste a un viaje sin retorno, a un estraño sueño que no logramos recordar al despertar, a la lectura de un libro invisible.</li>

        <li>Las puertas del Teatro Lúcido se abren a las 11:11pm y se cierran a las 11:30pm. Confiamos en la puntualidad de nuestras bellas bestias.</li>

        <img className="bat" src="/bat.png"/>

        <li>Es esencial atender a nuestro código de etiqueta. En esta ocación el tema es Nuestra bestia interna. Será posible entrar únicamente con máscara. Confecciona, decora o compra una máscara. Recuerda que la máscara es un objeto ritual que visibiliza nuestra alma. Los colores de nuestra ropa, accesorios, pelucas, maquillaje de esta noche son los de la selva. Por favor, vista de verdes, ocres, cafés, oros, amarillos, carmines, vinos, morados, lilas y brillantes violetas. Se sugiere el uso de lentejuelas, terciopelos, sedas.... Las prendas más exquisitas que oculten nuestros armarios. Crinolinas, plumajes, kimonos, colmillos, aves del paraíso, sombreros, orejas de lobo, turbantes, colas de conejo, algas, capas, etc.</li>

        <li>Los celulares serán, sin excepción, recolectados en la entrada y devueltos al salir. Teatro Lúcido se hace responsable. Gocemos de lo efímero.</li>

        <li>El mítico Lúcido cuenta con un bar de embriagantes pócimas. Al llegar búsquelo y pregunte por su fortuna. Se le brindará una última instrucción.</li>
      </ul>

      <p>
        <Link className="button" to="/formulario">
          Juro de Seguir las Reglas
        </Link>
      </p>

    </section>
  );
}
