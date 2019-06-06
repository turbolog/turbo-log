import React,{useState, useEffect} from "react" 
import { Grid } from "@material-ui/core";
import LogCard from "./logCard"
import axios from "axios"
import NavBar from "../navbar/NavBar";


function AllLogs (props)  {
    let [logs, setLogs] = useState([])
    useEffect(() => {
        axios.get("/api/records").then(result => setLogs(result.data))
    },[]) 

    console.log(logs)
    let displayLogs = logs.map(log => {
        return(
            <Grid key={log.report_id} item xs={12} sm={6} lg={4} xl={3}>
                <LogCard log={log}/>
            </Grid>
        )
    })
    return (
        <>
            <NavBar/>
            <Grid container spacing={3} style={{padding: 78}}>
                {displayLogs} 
            </Grid>
        </>
    )
}

export default AllLogs