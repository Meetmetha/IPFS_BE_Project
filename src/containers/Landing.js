import React from 'react'
import { makeStyles , CssBaseline} from '@material-ui/core'
import HeadingNew from './HeadingNew'
import LandingCard from './LandingCard';

const useStyle = makeStyles((theme) => ({
    root:{
        margin:'0',
        minHeight:'100vh',
        margin: '0',
        backgroundImage:`url(${process.env.PUBLIC_URL + "/images/landing-bg.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'Cover',
        }
}));

const Landing = ()=> {
    const classes = useStyle();
    return( 
    <div className={classes.root}>
    <CssBaseline />
    <HeadingNew />
    <LandingCard />
    </div>
    )
}

export default Landing