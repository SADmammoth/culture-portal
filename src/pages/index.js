import React from 'react';
import MainPage from "../components/MainPage/";
import PrimarySearchAppBar from "../components/appBar";

const IndexPage = ({ data }) =>
  (<>
    <PrimarySearchAppBar></PrimarySearchAppBar>
    <MainPage data={data}></MainPage>
    {/*FOOTER NAVIGATION HERE*/}
  </>)

export default IndexPage



export const MainPageQuery = graphql`
query{
  english: allContentfulMainPage(filter: { node_locale: { eq: "en-US" } }) {
    nodes{
      title
      mainPicture {
        title
        resolutions(width: 1600){
        width
        height
        src
        srcSet
        }
      }
      desc {
        json
      }
      authorOfTheDayDesc {
        json
      }
      developerTeamDesc {
        json
      }
      githubIcon {
        title
        resolutions(width: 200){
          width
          height
          src
          srcSet
        }
      }
      teamPhotos {
        title
        resolutions(width: 500){
          width
          height
          src
          srcSet
        }
      }
      devPartNames
      devPartDesc
      githubLinks

      node_locale
    }
  }

  russian: allContentfulMainPage(filter: { node_locale: { eq: "ru" } }) {
    nodes{
      title
      mainPicture {
        title
        resolutions(width: 1600){
        width
        height
        src
        srcSet
        }
      }
      desc {
        json
      }
      authorOfTheDayDesc {
        json
      }
      developerTeamDesc {
        json
      }
      githubIcon {
        title
        resolutions(width: 200){
          width
          height
          src
          srcSet
        }
      }
      teamPhotos {
        title
        resolutions(width: 500){
          width
          height
          src
          srcSet
        }
      }
      devPartNames
      devPartDesc
      githubLinks

      node_locale
    }
}
}
`