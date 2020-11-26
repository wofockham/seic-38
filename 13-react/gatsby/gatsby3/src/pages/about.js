import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function About ({ data }) {
  return (
    <Layout>
      <h1>{ data.site.siteMetadata.title }</h1>
      <p>
        lorem ipsum coming soon
      </p>
    </Layout>
  )
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
