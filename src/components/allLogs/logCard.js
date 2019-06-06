import React, {useState} from "react" 
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography,CardHeader } from "@material-ui/core";
import Modal from "@material-ui/core/Modal"


function LogCard (props) {
    let [open, setOpen] = useState(false) 
    function handleOpen () {
        setOpen(true)
    }
    function handleClose () {
        setOpen(false)
    }
    let date = props.log.date.slice(0, 10);
    return (
        <Card>
            <CardHeader
            title={props.log.make + " " + props.log.model}
            subheader={date}
                />
            <CardMedia style={{height: 0, paddingTop: "60%"}}
                        image={props.log.image}
                        title={props.log.model} />
            <CardContent>
                <Typography gutterBottom varient="headline" component="h2" style={{fontSize: 22}} >
                    {props.log.description}
                </Typography>
                <Typography component="p">
                    {props.log.summary}
                </Typography>
            </CardContent>    
            <CardActions>
                 {props.log.recipt && <Button size="small" color="primary" onClick={handleOpen}>See Reciept</Button>}
            </CardActions>
            
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                >
                    <Grid container justify="center" alignItems="center" direction="column" style={{margin: `10vh auto`, left: `50%`, width: "50vw"}}>
                        <Grid item style={{display: "block"}}>
                            <img style={{maxHeight:"75vh",  }} src={props.log.recipt}/>
                        </Grid>   
                        <Grid item>
                            <Button onClick={handleClose} variant="contained" color="primary" >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
            </Modal>
        </Card>
    )
}


export default LogCard