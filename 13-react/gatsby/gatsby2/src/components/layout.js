import React from 'react';
import { Link } from 'gatsby';

// NB: parentheses () not {}
const ListLink = (props) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{ props.children }</Link>
  </li>
);
export default function Layout (props) {
  return (
    <div style={{ margin: '3rem auto', maxWidth: '650px', padding: '0 1rem' }}>
      <header>
        <Link to="/">
          <h3>Children Smoking</h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
      { props.children }
    </div>
  )
};
