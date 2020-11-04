import React from "react";
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import useStyles from './styles'
import ina from '../../ina.png'
const NewsCard = ({ article, i}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardUpper}>
                <CardMedia className={classes.media} image={article.image ? article.image?.thumbnail?.contentUrl : ina}/>
                <div className={classes.details} >
                    <Typography variant="body2" color="textSecondary" component="h2"> { (new Date(article.datePublished)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{article.provider[0].name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{article.name}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"  href={article.url}  target="_blank" >Learn More</Button>
                <Typography variant="h5" color="textSecondary">{ i+1 }</Typography>
            </CardActions>
        </Card>

       
    )
}
export default NewsCard;
