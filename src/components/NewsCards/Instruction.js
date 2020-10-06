import React from "react";
import './cssStyles.css';
import {Grid} from "@material-ui/core";

const infoCards = [
    {title: 'News by Top-Headline', subTitle: '', info:'Top-Headline, Latest News', text: 'Give me the latest news' },
    {title: 'News by Categories', subTitle: 'Categories',info: 'Entertainment, Health, Science, Sports, Technology', text: 'Tell me the recent news on Technology ' },
    {title: 'News by Terms', subTitle: 'Terms',info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    {title: 'News by Sources', subTitle: 'Sources',info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    {title: 'Small Talk', subTitle: '', text: 'How are you?, Can you help me?, What can I do here?' },
    {title: 'Calculator', subTitle: 'Mathematical Operation',info: 'Addition, Multiplication, Subtraction, Division, Square root...', text: 'Square root of 16' },
    {title: 'Calendar', subTitle: '',info: 'Date, time, Day, Time Zone...', text: 'What day is tomorrow?, What is Time zone?' },
    {title: 'Weather', subTitle: '',info: 'weather, temperature, humidity, pressure', text: 'What is weather in Mumbai?, What is the Temperature?, Is it going to rain?' },

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
                                <div  className="card__subtitle">
                                    <strong>{infoCard.subTitle}</strong>
                                    <br />{infoCard.info}
                                </div>


                                <br/>
                                <div className="card__description">
                                    <i><strong>Try Saying..</strong><br/>{infoCard.text}</i>
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
