import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import useStyles from './Style.js';

const NewsCard = ({ article: { title, description, urlToImage, url, publishedAt, author, source } }) => {

    const classes = useStyles();
    return (
        <Card className={classes.container}>
            <CardActionArea>
                <CardMedia className={classes.media} image={urlToImage} title={title} />
                <CardContent className={classes.header}>
                    <Typography variant="body2" color="textSecondary">{source.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{new Date(publishedAt).toDateString()}</Typography>
                </CardContent>
                <CardContent className={classes.mainContent}>
                    <Typography gutterBottom variant="body1" color="textPrimary">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" noWrap="true">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" size="small" href={url} target="_blank" >Learn More</Button>
            </CardActions>
        </Card >

    );

}

export default NewsCard;