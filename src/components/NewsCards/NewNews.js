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
            // <ul>
            //     {articles.map((item, i) => (
            //     <Item key={i} item={item} />
            //     ))}
            // </ul>
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
function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  
    return (
      <li className="item">
        {item.image &&
          <img className="thumbnail"
            alt=""
            src={item.image?.thumbnail?.contentUrl}
          />
        }
  
        <h2 className="title">
          <a href={item.url}>{item.name}</a>
        </h2>
  
        <p className="description">
          {item.description}
        </p>
  
        <div className="meta">
          <span>{formatDate(item.datePublished)}</span>
  
          <span className="provider">
            {item.provider[0].image?.thumbnail &&
              <img className="provider-thumbnail"
                alt=""
                src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
              />
            }
            {item.provider[0].name}
          </span>
  
          {item.category &&
            <span>{separateWords(item.category)}</span>
          }
        </div>
      </li>
    );
  }
export default NewNews;
