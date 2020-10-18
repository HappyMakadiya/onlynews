import React from "react";
import NewNewsCard from "../NewsCard/NewNewsCard";
import {Grid, Grow} from "@material-ui/core";
import useStyles from "./styles";
import './cssStyles.css';
import Instruction from "./Instruction";

const NewNews = ({ articles }) => {
  const classes = useStyles();
    if(!articles){
        return (
            <Instruction />
        );
    }
    return (
            <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article,i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewNewsCard article={article} i={i} />
                    </Grid>
                )) }
            </Grid>
        </Grow>
        
    );  
}
export default NewNews;
