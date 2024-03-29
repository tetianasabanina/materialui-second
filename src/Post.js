import React from 'react';
import { Typography } from '@material-ui/core';
import HomeButton from './HomeButton';
import Posts from './Posts'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      width: "80%",
      margin: "120px auto auto",
      height: "100%",
      color: "#305792",
    },
    
    postImg: {
      flexFlow: "left",
      maxWidth: "100%",
      maxHeight: "300px",
      margin: "20px 0",
      borderRadius: "8px",
    }, 
    paragraph: {
      padding: "30px 0",
      
    }
  });

const Post =({ match, data }) => {

  console.log("match", match);
  console.log("data", data);
  const classes = useStyles();
    let post = data.find(p=> p.id.toString() === match.params.postId);
    if (!post) {
      console.log("no post found");
      return <div><Posts /></div>
    }
    console.log(post);
    return (
      <div className={classes.root} >
        <img src={post.image} alt={post.title} className={classes.postImg}></img>
        <Typography variant="h2">{post.title}</Typography>
        <Typography className={classes.paragraph}>{post.text}</Typography>          
        <HomeButton />
      </div>
    );
}

export default Post;