import {makeStyles} from '@material-ui/core/styles'
import {AppBar,IconButton , Button, Toolbar, Collapse } from  '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort'
import * as actions from '../actions'
import * as routes from "../constants/routes";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Divide } from 'react-feather';
import { PostAdd } from '@material-ui/icons';

const UseStyle = makeStyles((theme)=> ({
    appbar:{
        background : 'none',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    appbarWrapper:{
        width : '80%',
        margin : '0 auto',
        padding : '0 5%',
    },
}));
export default function Navigations(){
    const classes = UseStyle();
    return <div>
         <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 >
            IPFS
          </h1>
          <div className={classes.appbarTitle}>
          <Link to={routes.UPLOAD}> <Button variant="contained" color="primary" >Upload</Button></Link>
          <Link to={routes.SEE}> <Button variant="contained" color="primary" >Download</Button></Link>
          </div>
          <Link to={routes.ACCOUNT}> <Button variant="contained" color="primary" >Account</Button></Link>
          <Link to={routes.SIGN_IN}> <Button variant="contained" color="primary" >Sign In</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
}