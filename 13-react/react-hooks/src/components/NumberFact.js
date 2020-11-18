import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia').then(result => {
      setFact(result.data);
    });
  }, []);   // empty array means run this function only once.

  return (
    <p>{ fact }</p>
  )
};

export default NumberFact;
