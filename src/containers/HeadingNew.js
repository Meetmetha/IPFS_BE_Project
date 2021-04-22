import {makeStyles} from '@material-ui/core/styles'
import {AppBar,IconButton , Button, Toolbar, Collapse } from  '@material-ui/core'
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort'
import * as actions from '../actions'
import * as routes from "../constants/routes";
import React, { useEffect, useState } from 'react';


const UseStyle = makeStyles((theme)=> ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  Title:{
      color:'#fff',
      fontsize:'4.5 rem',
      textAlign:'center',
      fontWeight:'bolder'
  },
  container:{
      textAlign: 'center',
    },
    appbar:{
        background : 'none',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon:{
        color: '#fff',
        fontsize:'2rem'
    },
    appbarWrapper:{
        width : '80%',
        margin : '0 auto'
    },
    goDown:{
      color:'#fff',
      fontsize:'1rem'
    }

}));

export default function HeadingNew (){
  const classes = UseStyle();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return <div className={classes.root} id='header'>
      {/* <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            IPFS
          </h1>
          <Link to={routes.SIGN_IN}><Button variant="contained" color="primary" >Sign In</Button></Link>
        </Toolbar>
      </AppBar> */}
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >      
      <div className={classes.container}>
        <h1 className={classes.Title}>Welcome <br /> to <br />Interplanetary File System <br />(IPFS)</h1>
      <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
      </IconButton>
      </div>
      </Collapse> 
  </div>
}