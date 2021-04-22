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
  margin:'auto',
},
footer:{
  display:'flex',
  fontSize:'70px',
}
    
}))

export default function Headeri(){
    const classes = UseStyle();
    return <div className={classes.root}>
               <div className={classes.footer}>SECURE FILE STORAGE OVER IPFS</div>
    </div>
}