import React from 'react'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../navbar/NavBar';
import {Link} from "react-router-dom"
import "./Account.css"




    
  

const Account =() => {
    return (
        <div className="account">
            <NavBar/>

                 <Grid>
                    <Grid container className="acc-top-col" >
                    <img className="user-pic" src="https://popingservers.com/images/1.png"/>
                </Grid>
                    <Grid className="both-btn">
                        <button className="button-upload">Select Picture</button>
                        <button className="button-upload">Upload</button>
                    </Grid> 
                    <div className="account-bottom-col">
                      <Link style={{textDecoration:"none"}} to="/log">
                        <Card className="car-log" style={{height:"200px", width:"200px",marginTop:"30px", color:"#009688"}}>
                    
                            <CardHeader title="Car Logs"/>
                        
                            <CardContent>
                            <Typography style={{color:"#009688"}} variant="h5" color="textSecondary" component="p">
                                    Find history of you car Maintenance 
                            </Typography>
                            </CardContent>
                        </Card> 
                      </Link>
                    <Link style={{textDecoration:"none"}} >
                    <Card className="my-garage" style={{height:"200px", width:"200px",marginTop:"30px"}}>
                        <CardHeader title="My Garage"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    display on of the car 
                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </Link> 
                    <Link style={{textDecoration:"none"}} >
                    <Card className="find-shop" style={{height:"200px", width:"200px",marginTop:"30px"}}>
                        <CardHeader title="Find Shop"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    Find Maintenance Shop Near Me
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link to="/forum" style={{textDecoration:"none"}} >
                    <Card className="forum-pic" style={{height:"200px", width:"200px",marginTop:"30px"}}>
                        <CardHeader title="Forum"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    Find DIY and tranding topics
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link style={{textDecoration:"none"}} >
                    <Card className="sos" style={{height:"200px", width:"200px",marginTop:"30px"}}>
                        <CardHeader title="SOS"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    
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

