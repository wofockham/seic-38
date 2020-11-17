import React, { useState } from 'react';

const Clickr = (props) => {
  console.log('Clickr()');

  const [clicks, setClicks] = useState(0); // 0 is the initial value

  return (
    <button onClick={ () => setClicks(clicks + 1) }>{ clicks } clicks so far</button>
  );
};

export default Clickr;

// class Clickr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicks: 0
//     };
//
//     this._incrementClicks = this._incrementClicks.bind(this);
//   }
//
//   _incrementClicks() {
//     this.setState({clicks: this.state.clicks + 1});
//   }
//
//   render() {
//     console.log('render()');
//     return (
//       <button onClick={ this._incrementClicks }>{ this.state.clicks } so far</button>
//     );
//   }
// }
//
// export default Clickr;
