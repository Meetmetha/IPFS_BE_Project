import React from 'react';
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import { BrowserRouter, Route } from 'react-router-dom'
import { Col } from "reactstrap";
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import * as actions from '../actions'
import CardCongratulations from '../frontend/views/ui-elements/cards/advance/CardCongratulations'
import See from './See'
import Upload from './Upload'
import TableBasic from './table'
import Landing from '../containers/Landing'

const LandingPage = () => (
  <div>
    <BrowserRouter>
      <div>
      <Landing />
        <Box align='center' responsive={true} pad='large'>
          <Box align='center' responsive={true} pad='medium'>
          </Box>
          <Route exact path='/upload' component={Upload} />
          <Route exact path='/see' component={See} />
        </Box>
      </div>
    </BrowserRouter>
  </div>
);

function mapStateToProps(state) {
  return {
    ipfs: state.ipfs
  }
}

export default connect(mapStateToProps, actions)(LandingPage);
