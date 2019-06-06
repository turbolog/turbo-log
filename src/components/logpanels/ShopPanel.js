import React, {useState} from "react" 
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "@material-ui/core/Modal"
import Button from '@material-ui/core/Button';

function ShopPanel (props) {
    const { classes } = props;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const handleModal = () =>{
          handleClose()
    }
    return (<ExpansionPanel key={props.log.report_id}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {"Brakes Changed"}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item><span className={classes.span} >Shop Name: </span>{props.log.shop_name}</Grid>
            <Grid item><span className={classes.span} >Millage: </span>{props.log.miles}</Grid>
            
            
            <Button variant="contained" color="primary" onClick={handleOpen}>View Receipt</Button>
            <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
                  >
                    <Grid container justify="center" >
                        <Grid item>
                           <Typography variant="h6" id="modal-title">
                                 title
                             </Typography>
                             <Typography variant="subtitle1" id="simple-modal-description">
                             <img style={{maxHeight:"800px", }} src="https://images.invoicehome.com/templates/receipt-template-us-neat-750px.png"/>
                             </Typography>
                             <Typography style={{textAlign:"center"}}>
                               <Button onClick={handleModal} variant="contained" color="primary" >
                                 Close
                               </Button>
                             </Typography>
                         </Grid>   
                    </Grid>
           </Modal>
          </Grid>
          <Typography />
        </ExpansionPanelDetails>
      </ExpansionPanel>)
}

export default ShopPanel 