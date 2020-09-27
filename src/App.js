import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles';

const alanKey = '64ac0ca7df2e19f1eaf6e0ba289d49782e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const classes = useStyles();
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
        document.title = "OnlyNews"
    }, [])

    return (
        <div>

            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>

            <NewsCards articles={newsArticles} />

        </div>
    )
}

export default App;