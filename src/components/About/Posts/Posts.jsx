import React from "react";
import posts from "./Posts.module.css";
import SinglePost from "./SinglePost/SinglePost";

export default function Posts() {
  return (
    <div className={posts.posts}>
      MY POSTS
      <div>
        <textarea placeholder = "Введите пост"></textarea>
        <button> Добавить</button>
      </div>
      <div className={posts.posts}>
        <SinglePost message="Hi"/>
        <SinglePost message="Fuck of"/>  
        <SinglePost message="Why are  you So mad!"/> 
        <SinglePost message="Why are  you So mad!"/> 
 
      </div>
    </div>
  );
}





