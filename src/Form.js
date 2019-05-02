import React from 'react';
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <section className="form">
      <h1>Un Poco Sobre Ti</h1>

      <label>
        Su nombre<br/>
        <input name="name" value="" />
      </label>
      <br/>
      <br/>

      <p>Quien le invitó?</p>
      <input type="radio" id="coral" name="who" value="coral" checked />
      <label htmlFor="coral">Coral Haze</label>
      <br/>
      <input type="radio" id="dalia" name="who" value="dalia" checked />
      <label htmlFor="dalia">Dalia Xiu</label>

      <br/>
      <br/>
      <br/>
      <Link className="button" to="/pago">
        Listo
      </Link>

    </section>

  );
}
