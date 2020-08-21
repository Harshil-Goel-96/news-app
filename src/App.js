import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import alnBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './Components/NewsCards/NewsCards.js';

const App = () => {
  const Alan_key = '3f5bfbc63a56197c18c361921f07ef3c2e956eca572e1d8b807a3e2338fdd0dc/stage';
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alnBtn({
      key: Alan_key,
      onCommand: ({ command, articles }) => {
        if (command === 'TopHeadlines') {
          setNewsArticles(articles);
        }
        else if (command === 'Thing') {
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Labore excepturi repudiandae minima ad dolores libero iure
          cupiditate ea ab perferendis autem porro, enim explicabo eos illum
          distinctio aperiam tempora.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "cyan", flexGrow: 1 }}>
        <NewsCards articles={newsArticles} />
      </div>
      <div className="footer">
        <p className="copyright">&copy; Harshil Corp</p>
        <div className="follow-pal">
          <h5>Follow : </h5>
          <IconButton href="https://www.google.com" color="inherit"><GitHubIcon className="icon" /></IconButton>
          <IconButton href="https://www.google.com" color="inherit"><FacebookIcon className="icon" /></IconButton>
        </div>
      </div>

    </div >


  );
};
export default App;
