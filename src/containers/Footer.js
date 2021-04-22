import {makeStyles} from '@material-ui/core/styles'
import Header from '../containers/Header'
import {AppBar,IconButton , Button, Toolbar, Collapse } from  '@material-ui/core'
import {handleUploadFile, encryptPassword, encrytPasswordHint, handleSubmit} from '../components/Upload'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const UseStyle = makeStyles((theme)=> ({
root:{
  display:'flex',
  color:'white',
  textAlign:'center',
},
footer:{
  display:'flex',
}
    
}))

export default function Footer(){
    const classes = UseStyle();
    return <div className={classes.root}>
               <div className={classes.footer}><h6>&copy; 2021, <a href="https://miteshmetha/">Project by MiteshMetha & Dnyanesh Waghulde</a></h6></div>
    </div>
}






























