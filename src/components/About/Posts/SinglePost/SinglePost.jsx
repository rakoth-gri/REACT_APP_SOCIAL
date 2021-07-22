import React from "react";
import singlepost from "./SinglePost.module.css";

const fa = "fa fa-thumbs-up";

export default function SinglePost({message}) {

    // let a = props.message;
    // если функцию передаем объект propss

  return (
    <div className={singlepost.item}>
        <img
        alt="ava"
        src="https://i.pinimg.com/originals/88/ea/36/88ea3676c0f4b6a81dd3dd585a774035.jpg"
        className={singlepost.ava}
      />
      {message}
      <div> <i className={singlepost[fa]}></i> 
      </div>      
    </div>
  );
}

