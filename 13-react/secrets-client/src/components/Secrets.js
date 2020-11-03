import React, { Component } from 'react';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: [{"id":1,"content":"test secret one","created_at":"2020-11-02T23:30:34.072Z","updated_at":"2020-11-02T23:30:34.072Z","url":"http://localhost:3000/secrets/1.json"},{"id":2,"content":"test secret two","created_at":"2020-11-02T23:30:49.146Z","updated_at":"2020-11-02T23:30:49.146Z","url":"http://localhost:3000/secrets/2.json"},{"id":3,"content":"further secret","created_at":"2020-11-02T23:30:59.853Z","updated_at":"2020-11-02T23:30:59.853Z","url":"http://localhost:3000/secrets/3.json"},{"id":4,"content":"additional secret","created_at":"2020-11-02T23:31:07.069Z","updated_at":"2020-11-02T23:31:07.069Z","url":"http://localhost:3000/secrets/4.json"}]
    }
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm />
        <SecretList secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  render() {
    return (
      <h1>Form Coming Soon</h1>
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
