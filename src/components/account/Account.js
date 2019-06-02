import React from 'react'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from '../navbar/NavBar';
import {Link} from "react-router-dom"
import "./Account.css"
import Uploader from "../picture-uploader/PictureUploader"
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));
    
  

const Account =() => {
    
    const classes = useStyles()
    return (
        <div className="account">
            <NavBar/>

                 <Grid>
                    <Grid container className="acc-top-col" >
                    <img className="user-pic" src="https://popingservers.com/images/1.png"/>
                </Grid>
                    <Grid style={{textAlign:"center"}}>
                        <Uploader/>
                    </Grid> 
                    <div className="account-bottom-col">
                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                           <CardMedia
                                className={classes.media}
                                image="http://www.xappsoftware.com/wordpress/wp-content/uploads/2018/02/twitter-list.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="textSecondary" component="p">
                                  Car logs
                                </Typography>
                            </CardContent>
                         </Card> 
                      </Link>

                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                           <CardMedia
                                className={classes.media}
                                image="https://u.realgeeks.media/makeyourmovematter/tidbits/garage-storage-solution-fea.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="textSecondary" component="p">
                                  Garage
                                </Typography>
                            </CardContent>
                         </Card> 
                      </Link> 

                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                           <CardMedia
                                className={classes.media}
                                image="https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F80045%252F20c815b8-6ada-45a2-91a6-0f62598d9923.png%252F950x534.png?signature=6hqOtjmXYhp5dDxV5Jj5HrDwNfQ=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="textSecondary" component="p">
                                  Find Shop  
                                </Typography>
                            </CardContent>
                         </Card> 
                      </Link> 

                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                           <CardMedia
                                className={classes.media}
                                image="https://d2ekdq2ws22nn1.cloudfront.net/wp-content/uploads/2018/03/Help.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="textSecondary" component="p">
                                  SOS
                                </Typography>
                            </CardContent>
                         </Card> 
                      </Link>

                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                           <CardMedia
                                className={classes.media}
                                image="https://www.livehope.org/wp-content/uploads/2014/11/Forum-Marketing-e1416937956255.png"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="textSecondary" component="p">
                                  Forum
                                </Typography>
                            </CardContent>
                         </Card> 
                      </Link>
                    

                    </div>
            </Grid>
        </div>
    )
}

export default Account

