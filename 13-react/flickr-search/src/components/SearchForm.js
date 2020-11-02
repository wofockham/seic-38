import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query ); // call the event handler provided by our parent.
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit } >
        <input type="search" placeholder="SQL" required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
