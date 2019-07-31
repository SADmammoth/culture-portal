import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card, Button, Avatar } from "@material-ui/core";

import RenderRichText from '../../utils/RenderRichText'
import RenderImage from '../../utils/RenderImage'

const MainPage = ({ data }) => {

  const MainPage = data.russian.nodes[0]
  console.log(MainPage.githubIcon)
  const GithubIcon = RenderImage(MainPage.githubIcon.resolutions)

  /*Function processing data for each team participant*/
  function devTeamParts() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(<div className='devTeamPart'>
        <Avatar className="devTeamPhoto" title={MainPage.teamPhotos[i].title} src={MainPage.teamPhotos[i].resolutions.src} alt={MainPage.teamPhotos[i].title} />
        <Link title={MainPage.githubLinks[i]} to={MainPage.githubLinks[i]} className='githubLink'>{GithubIcon}</Link>
        <div className='teamPartDesc'>
          <h3>{MainPage.devPartNames[i]}</h3>
          <p>{MainPage.devPartDesc[i]}</p>
        </div>
      </div>)
    }
    return <>{arr}</>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{MainPage.title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <div id='MainPage'>
        <Grid container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ width: '100%', height: '65vh', background: `center / cover url(${MainPage.mainPicture.resolutions.src})` }}>
          <Container maxWidth='md'>
            <h1>{MainPage.title}</h1>
            <div style={{ width: '90%', marginLeft: '10%' }}>{RenderRichText(MainPage.desc.json)}</div>
          </Container>
        </Grid>
        <Grid container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ width: '100%', height: '65vh', background: `linear-gradient(to bottom, #ECF5FF 45%, #ECF5FF00 45%)` }}>
          <Container maxWidth='md'>
            {RenderRichText(MainPage.authorOfTheDayDesc.json)}
            <Link to="/photographers-list/">
              <Card style={{ height: '250px' }}>
              </Card>
            </Link>
          </Container>
          <Button href='/photographers-list/' className='right-aligned-wide-btn'>Увидеть всех</Button>
        </Grid>
        <div style={{ background: '#ECF5FF', float: 'left', padding: '5% 0 5% 18%' }}>
          <Container maxWidth='md'>
            {RenderRichText(MainPage.developerTeamDesc.json)}
          </Container>
          <Container maxWidth='md'>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              wrap="wrap"
              style={{ float: 'left' }}
            >
              {devTeamParts()}
            </Grid>
          </Container>
        </div>
      </div>
    </React.Fragment>)
}

export default MainPage