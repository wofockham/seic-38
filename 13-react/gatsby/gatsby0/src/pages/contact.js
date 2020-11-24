import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default function Contact () {
  return (
    <div style={{ color: 'green'} }>
      <Link to="/">Home</Link>
      <Header headerText="Contact Us" />
      <p>Please do not contact us</p>
    </div>
  );
};
