import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Update this once deployed.

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);

    // Polling:
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({secrets: results.data});
        setTimeout(fetchSecrets, 6000); // recursion alternative to setInterval
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((result) => {
      // Add the new secret to the existing collection of secrets in state.
      this.setState({secrets: [...this.state.secrets, result.data]});
    });
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretList secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = {content: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.content );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } />
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

const SecretList = (props) => {
  console.log('SecretList() rendering');
  return (
    <div>
      { props.secrets.map( (s) => (<p key={ s.id }>{ s.content }</p>) ) }
    </div>
  );
}

export default Secrets;
