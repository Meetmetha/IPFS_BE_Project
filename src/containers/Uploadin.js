import {makeStyles} from '@material-ui/core/styles'
import Header from '../containers/Header'
import {AppBar,IconButton , Button, Toolbar, Collapse } from  '@material-ui/core'
import {handleUploadFile, encryptPassword, encrytPasswordHint, handleSubmit} from '../components/Upload'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Footer from '../containers/Footer'
import Headeri from '../containers/Header'

const UseStyle = makeStyles((theme)=> ({

    root:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    backgroundImage:`url(${process.env.PUBLIC_URL + "/images/landing-bg.jpg"})`,
    },  
    container:{
        margin:'auto',
        fontWeight:'bold',
        textAlign:'center',
        width:'60%',
        height: '80vh',
        backgroundColor:'White',
        color:'purple',
        border: '1px solid purples',
        borderRadius: '10%',
        paddingTop:'70px',
    },
    label:{
        padding:'2% 0',
    },
    inputA:{
        border:'1px solid purple',
        width:'30%',
        
    },
    Bcontainer:{
        margin:'20px 0'
    },
    ButtonS:{
        display:'flex',
        margin:'auto',
    },
    head:{
        fontSize:'70px',
    },
}))

export default function Uploadin(){
    const classes = UseStyle();
    return <div className={classes.root}>
    <Headeri />
        <div className={classes.container}>
        <h1 className={classes.head}>Upload data to IPFS </h1>
            <h3 className={classes.label}>Please attach Your File :</h3>
            <input className={classes.inputA} id='file' name='document' type='file'   />
            <h3 className={classes.label}>Enter File Password :</h3>
            <input className={classes.inputA} id='password' name='password' type='password'  />
            <h3 className={classes.label}>Enter Password Hint :</h3>
            <input className={classes.inputA} id='passwordhint' name='passwordhint' type='text'  />
           <div className={classes.Bcontainer}> <Button className={classes.ButtonS} variant="contained" color="primary" >Upload</Button></div>
        </div>
        <Footer />
    </div>
}