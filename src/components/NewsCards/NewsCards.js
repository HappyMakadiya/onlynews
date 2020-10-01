import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import {Grid, Grow, Typography} from "@material-ui/core";
import useStyles from "./styles";
import './cssStyles.css';
const infoCards = [
    { color: '#00838f', title: 'News by Top-Headline',info:'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Entertainment, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles }) => {
    const classes = useStyles();
    if(!articles.length){
        return (
            <Grid className="containerCard" container alignItems='stretch' spacing={3}>
                {infoCards.map((infoCard) => (
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <div className="card_main">
                                <div className="card__title">
                                    {infoCard.title}
                                </div>
                                    {   infoCard.info
                                        ?<div  className="card__subtitle"><strong>{infoCard.title.split(' ')[2]}</strong>
                                          : <br />{infoCard.info} </div>
                                        :null
                                    }
                                <br/>
                                <div className="card__description">
                                        <i>Try Saying..<br/>{infoCard.text}</i>
                                </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article,i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} i={i} />
                    </Grid>
                )) }
            </Grid>
        </Grow>
    );
}
export default NewsCards;
