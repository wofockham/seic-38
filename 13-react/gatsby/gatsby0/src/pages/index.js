import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div style={{ color: 'purple' }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello</h1>
      <p>Cruel world</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Random" />
    </div>
  );
}
