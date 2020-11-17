import React, { useState } from 'react';

const Echo = () => {
  const [message, setMessage] = useState('');
  console.log('rendering, here is the new value of message', message);
  return (
    <div>
      <h2>{ message }</h2>
      <input onInput={ (e) => setMessage( e.target.value ) } />
    </div>
  )
};

export default Echo;
