import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import alnBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './Components/NewsCards/NewsCards.js';
import WordsToNumbers from 'words-to-numbers';

const App = () => {
  console.log("App");
  const Alankey = '3f5bfbc63a56197c18c361921f07ef3c2e956eca572e1d8b807a3e2338fdd0dc/stage';

  const [newsArticles, setNewsArticles] = useState([]);
  const [newIndex, setNewIndex] = useState(-1);

  useEffect(() => {
    console.log("Before alan useEffect");
    alnBtn({
      key: Alankey,
      onCommand: ({ command, articles, index, number }) => {
        if (command === 'TopHeadlines') {
          console.log("inside alan");
          setNewsArticles(articles);
        }
        else if (command === 'ReadHeadlines') {
          setNewIndex((prevNewIndex) => (prevNewIndex + 1));
        }
        else if (command === 'Open') {

          const parsedNumber = WordsToNumbers(number, { fuzzy: true });
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alnBtn().playText("Please try again")
          }
          else {
            window.open(article.url, '_blank');
          }

        }
      }

    });
    console.log("After alan useEffect");
  }, []);

  return (
    <div className="main-container">
      <div className="hero">
        <div className="hero-heading">
          <h1>Hey ! Ask me about NEWS</h1>
        </div>
        <div className="hero-para">
          <p>Try pressing the Hovering Mic button at the bottom of this page
          and ask Alan about the Latest News or about some other stuff.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#DEF2F1", flexGrow: 1 }}>
        <NewsCards articles={newsArticles} newIndex={newIndex} />
      </div>
      <div className="footer">
        <p className="copyright">&copy; Harshil Corp.</p>
        <div className="follow-pal">
          <h5>Follow : </h5>
          <IconButton href="https://github.com/Harshil-Goel-96/news-app" target="_blank" color="inherit" size="small"><GitHubIcon className="icon" /></IconButton>
          <IconButton href="https://www.facebook.com" target="_blank" color="inherit" ><FacebookIcon className="icon" /></IconButton>
        </div>
      </div>

    </div >


  );
};
export default App;
