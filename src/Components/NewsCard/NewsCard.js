import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import useStyles from './Style.js';
import classNames from 'classnames';

const NewsCard = ({ article: { title, description, urlToImage, url, publishedAt, author, source }, i, newIndex }) => {

    const classes = useStyles();
    console.log("Card")
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (i === newIndex && elRefs[newIndex]) {
            scrollToRef(elRefs[newIndex]);
        }
    }, [i, newIndex, elRefs]);



    return (
        <Card ref={elRefs[i]} className={classNames(classes.container, ((newIndex === i) ? classes.activecard : "null"))} elevation={4}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || "https://ak.picdn.net/shutterstock/videos/10027844/thumb/2.jpg"} title={title} />
                <CardContent className={classes.header}>
                    <Typography variant="body2" color="textSecondary">{source.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{new Date(publishedAt).toDateString()}</Typography>
                </CardContent>
                <CardContent >
                    <Typography gutterBottom variant="body1" color="textPrimary">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" noWrap={true}>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actionarea}>
                <Button variant="outlined" size="small" href={url} target="_blank" >Learn More</Button>
                <Typography variant="body2" color="textSecondary" >{i + 1}</Typography>
            </CardActions>
        </Card >

    );

}

export default NewsCard;