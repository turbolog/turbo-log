import React from 'react'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../reusable/NavBar';
import {Link} from "react-router-dom"
import "./Account.css"


const Account =() => {
    return (
        <div className="account">
            <NavBar/>

            <Grid>

                <Grid container className="acc-left-col" >
                    <button>Upload</button>
                    <img className="user-pic" src="https://popingservers.com/images/1.png"/>
                    <button>submit</button>

                </Grid>
                <div className="account-bottom-col">
                    <Link to="carlogs">
                    <Card style={{height:"200px", width:"200px", border:"1px red solid",marginTop:"10px", textDecoration:"none"}}>
                    
                        <CardHeader title="Car Logs"/>
                        
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    Find history of you car Maintenance 
                            </Typography>
                        </CardContent>
                    </Card> 
                    </Link>
                    <Link>
                    <Card style={{height:"200px", width:"200px", border:"1px red solid",marginTop:"10px"}}>
                        <CardHeader title="My Garage"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    display on of the car 
                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </Link> 
                    <Link>
                    <Card style={{height:"200px", width:"200px", border:"1px red solid",marginTop:"10px"}}>
                        <CardHeader title="Find Shop"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    Find Maintenance Shop Near Me
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link to="/forum">
                    <Card style={{height:"200px", width:"200px", border:"1px red solid",marginTop:"10px"}}>
                        <CardHeader title="Forum"/>
                        <CardContent>
                            <Typography variant="h5" color="textSecondary" component="p">
                                    Find DIY and tranding topics
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link>
                    <Card style={{height:"200px", width:"200px", border:"1px red solid",marginTop:"10px"}}>
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

