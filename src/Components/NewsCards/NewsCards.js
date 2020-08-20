import React from 'react';
import { Grid } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard.js'
import useStyles from './Style.js';

const NewsCards = ({ articles }) => {
    console.log(articles);
    const classes = useStyles();

    return (
        <div style={{ padding: "20px 20px 20px 20px" }}>
            <Grid container className={classes.container} spacing={2} justify="center" alignItems="center">
                {
                    articles.map((article) => (

                        <Grid item xs={12} sm={6} lg={4} className={classes.gridItem}>
                            <NewsCard article={article} />
                        </Grid>

                    ))
                }

            </Grid>
        </div>

    );
}

export default NewsCards;