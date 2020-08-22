import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import alnBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './Components/NewsCards/NewsCards.js';

const App = () => {
  const Alankey = '3f5bfbc63a56197c18c361921f07ef3c2e956eca572e1d8b807a3e2338fdd0dc/stage';
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alnBtn({
      key: Alankey,
      onCommand: ({ command, articles }) => {
        if (command === 'TopHeadlines') {
          setNewsArticles(articles);
        }
        else if (command === '') {
          setNewsArticles(articles);
        }
      }

    });

  }, []);

  return (
    <div className="main-container">
      <div className="hero">
        <div className="hero-heading">
          <h1>Hey ! Ask me about NEWS</h1>
        </div>
        <div className="hero-para">
          <p>Try pressing the Hovering Mic button at the bottom of this page and ask Alan about the Latest News or about some other stuff.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#DEF2F1", flexGrow: 1 }}>
        <NewsCards articles={newsArticles} />
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
