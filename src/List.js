import React from 'react'

export default class List extends React.Component {

  state = {
    error: '',
    data: [],
  }

  async componentDidMount() {
    console.log('wtf');
    const url = 'https://esmbuy46ni.execute-api.us-east-1.amazonaws.com/default/lucido'
    try {
      const response = await fetch(url + location.search)
      if (response.status >= 200 && response.status < 300) {
        const data = response.json();
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
      <div>
        <pre>
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
      </div>
    );
  }
}
