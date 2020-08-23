import React from 'react';
import { Grid, Card, Typography, Grow } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard.js'
import useStyles from './Style.js';
import HomeContent from './HomeContent.js';

const NewsCards = ({ articles, newIndex }) => {
    //console.log(articles);
    console.log("NewsCards")
    const classes = useStyles();

    if (!articles.length) {

        return (
            <Grow in timeout={500}>
                <div style={{ padding: "35px 20px 20px 20px" }}>
                    <Grid container spacing={1} justify="center" alignItems="center">
                        {
                            HomeContent.map((content, k) => (

                                <Grid key={k} item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
                                    <Card className={classes.homeCard} style={{ backgroundColor: content.bgColor }} elevation={5}>
                                        <Typography variant="h5">{content.heading}</Typography>
                                        <Typography variant="body1"><strong>{content.heading.split(" ")[2]} : </strong>{content.Example}</Typography>
                                        <Typography variant="body2"><strong>Try Saying : </strong>{content.Desc}</Typography>
                                    </Card>
                                </Grid>

                            ))
                        }

                    </Grid>

                </div>
            </Grow >);

    }
    else {
        return (
            <div style={{ padding: "20px 20px 20px 20px" }}>
                <Grid container className={classes.container} spacing={2} justify="center" alignItems="center">
                    {
                        articles.map((article, i) => (

                            <Grid key={i} item xs={12} sm={6} lg={4} className={classes.gridItem}>
                                <NewsCard article={article} i={i} newIndex={newIndex} />
                            </Grid>

                        ))
                    }
                </Grid>
            </div>
        );
    }
}

export default NewsCards;