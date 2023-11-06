import React from 'react'
import Header from './components/Header';
import Poster from './components/Poster';
import { Grid } from '@mui/material';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Grid container direction="column" spacing={8}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Poster />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
    </div>
  )
}
export default Home;