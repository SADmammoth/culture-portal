import React from "react";
import BiographyTimeline from "./biographyTimeline";
import Layout from "./layout";
import { graphql } from 'gatsby';
import AuthorPage from '../components/authorPage';

const Photographer = ({ data }) => {
  const authorInfo = data.contentfulAuthors;
  const { biography } = authorInfo.biography;
  const { biographyList } = authorInfo;

  return (
    <Layout>
      <AuthorPage/>
      <BiographyTimeline biographyList={biographyList} />
    </Layout>
  );
}

export default Photographer;

export const PhotographerQuery = graphql`
  query($slug: String!) {
    contentfulAuthors(slug: { eq: $slug }) {
      biography {
        biography
      }
      biographyList
      initials
      videolink
    }
  }
`