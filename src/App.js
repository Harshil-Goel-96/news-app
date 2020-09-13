import React, { useState, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import alnBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./Components/NewsCards/NewsCards.js";
import WordsToNumbers from "words-to-numbers";

const App = () => {
  console.log("App");
  const Alankey = "3f5bfbc63a56197c18c361921f07ef3c2e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [newsArticles, setNewsArticles] = useState([]);
  const [newIndex, setNewIndex] = useState(-1);

  useEffect(() => {
    console.log("Before alan useEffect");
    alnBtn({
      key: Alankey,
      onCommand: ({ command, articles, index, number }) => {
        if (command === "TopHeadlines") {
          console.log("inside alan");
          setNewsArticles(articles);
          setNewIndex(-1);
        } else if (command === "ReadHeadlines") {
          setNewIndex((prevNewIndex) => prevNewIndex + 1);
        } else if (command === "Open") {
          //console.log(number.length)
          const parsedNumber = number.length > 2 ? WordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alnBtn().playText("Please try again");
          } else if (articles.length) {
            //console.log(newsArticles);
            window.open(article.url, "_blank");
          } else {
            alnBtn().playText("No article available to open. Please try something different");
          }
        }
      },
    });
    console.log("After alan useEffect");
  }, []);

  return (
    <div className="main-container">
      <div className="hero">
        <div className="hero-heading" onClick={() => setNewsArticles([])}>
          <h1>Hey ! Ask me about NEWS</h1>
        </div>
        <div className="hero-para">
          {!newsArticles.length ? (
            <p>
              Try pressing the Hovering Mic button <MicIcon style={{ fontSize: "1rem" }} /> at the bottom of this page and ask Alan about the Latest News or about some other stuff.
            </p>
          ) : (
            <p>
              Try saying : <span style={{ fontSize: "1.2rem", fontWeight: "bolder" }}> Go back Or Open article number 2</span>
            </p>
          )}
        </div>
      </div>

      <div style={{ backgroundColor: "#e0f2f1", flexGrow: 1 }}>
        <NewsCards articles={newsArticles} newIndex={newIndex} />
      </div>
      <div className="footer">
        <p>
          <strong>&copy; Harshil Corp</strong>
        </p>
        <div className="follow-pal">
          <p>
            <strong>Follow : </strong>
          </p>
          <IconButton href="https://www.facebook.com/harshil.goel.60" target="_blank" color="inherit">
            <FacebookIcon className="icon" />
          </IconButton>
          <IconButton href="https://www.twitter.com/harshilgoel96?s=01" target="_blank" color="inherit">
            <TwitterIcon className="icon" />
          </IconButton>
          <IconButton href="https://github.com/Harshil-Goel-96/news-app" target="_blank" color="inherit" size="small">
            <GitHubIcon className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default App;
