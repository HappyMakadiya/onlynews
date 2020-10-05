import React from "react";
import './cssStyles.css';
import {Grid} from "@material-ui/core";

const infoCards = [
    { color: '#00838f', title: 'News by Top-Headline',info:'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Entertainment, Health, Science, Sports, Technology', text: 'Tell me the recent Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
class Instruction extends React.Component{
    render() {
        return(
            <div>
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
            </div>
        )
    }
}
export default Instruction;
