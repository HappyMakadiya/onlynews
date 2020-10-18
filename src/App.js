import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";
import NavigationBar from "./components/NavigationBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewNews from './components/NewsCards/NewNews';
import Instruction from './components/NewsCards/Instruction'
const alanKey = '64ac0ca7df2e19f1eaf6e0ba289d49782e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [bingnews, setBingNews] = useState(null);
    const [track,setTrack] = useState(0);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'goBack'){
                    setTrack(0);
                }
                else if(command === 'newHeadlines'){
                   
                    setTrack(1);
                    setNewsArticles(articles);
                }
                else if(command === 'xyz'){
                    setTrack(2);
                    searchNews(articles).then(setBingNews);
                }
                
            }
        })
    }, [])
    async function searchNews(q) {
        q = encodeURIComponent(q);
        const response = await fetch(`https://rapidapi.p.rapidapi.com/news/search?count=50&freshness=Week&textFormat=Raw&safeSearch=Off&q=${q}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "118f42637bmsh0e01fcbaa2e0f1dp101073jsne65fccfcd64e",
            "x-bingapis-sdk": "true"
          }
        });
        const body = await response.json();
        return body.value;  
      }      
    return (
        <div  style={{backgroundColor:"white"}}>
            <NavigationBar/>
            <br/><br/>
           {
               track === 0 ? <Instruction/> :null
           }
            {!newsArticles ? null
                :track === 1 && newsArticles.length !== 0
                    ? <NewsCards articles={newsArticles} />
                    : null
            }
           
            {!bingnews ? null
                :track === 2 && bingnews.length !== 0
                    ? <NewNews articles={bingnews}/>
                    : <i>No Result</i>
            }
            
        </div>
    )   
}
export default App;