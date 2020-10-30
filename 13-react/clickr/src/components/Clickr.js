import React, { Component } from 'react';

class Clickr extends Component {
  constructor() { // like Ruby's initialize()
    super();
    this.state = {
      clicks: 0
    };

    this._incrementCount = this._incrementCount.bind(this);
  }

  // methods that start with an underscore (_) are considered event handlers.
  _incrementCount() {
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    console.log('rendering...');
    return (
      <button onClick={ this._incrementCount }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
