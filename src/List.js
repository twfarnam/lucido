import React from 'react'

export default class List extends React.Component {

  state = {
    error: '',
    data: [],
  }

  async componentDidMount() {
    const url = 'https://esmbuy46ni.execute-api.us-east-1.amazonaws.com/default/lucido'
    try {
      const response = await fetch(url + location.search)
      if (response.status >= 200 && response.status < 300) {
        const { Items: data } = await response.json();
        this.setState({ data });
      } else {
        const error = (await response.text()) || `Error ${ response.status }`
        this.setState({ error });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="list">
          <h1>Error!</h1>
          <h2>{ this.state.error }</h2>
        </div>
      );
    }

    return (
      <div className="List">
        <h1>Bestias, 15 Junio</h1>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Concepto</td>
              <td>Actor</td>
              <td>#</td>
              <td>#vip</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            { this.state.data.map((row) => (
              <tr key={ row.id }>
                <td>{ row.nombre }</td>
                <td>{ row.apellido }</td>
                <td>{ row.passphrase }</td>
                <td>{ row.actor }</td>
                <td>{ row.count }</td>
                <td>{ row.countVIP }</td>
                <td>{ row.total }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}
