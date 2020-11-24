import React from 'react';

import Container from '../components/Container';
import styles from './about-css-modules.module.css';

console.log( styles );

export default function About () {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS modules are crazy</p>

      <User
        username="Jane"
        avatar="http://placekitten.com/96/96"
        excerpt="No gods no masters"
      />

      <User
        username="Groucho"
        avatar="http://placekitten.com/96/97"
        excerpt="No gods no masters"
      />
    </Container>
  )
};

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);
