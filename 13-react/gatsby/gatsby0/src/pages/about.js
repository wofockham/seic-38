import React from 'react';
import Header from '../components/header';

export default function About() {
  return (
    <div style={{ color: 'teal' }}>
      <Header headerText="About" />
      <Header headerText="This is different text" />
      <p>Probably maybe.</p>
    </div>
  );
}
