import React from "react"
import './About.css'

export default function About() {
    return (
        <div className="about">
            <img src="https://cdn.photosight.ru/img/7/085/4446369_large.jpg" alt="E-burg" className="about__pict" />
            <div className="about__ava_personal">
                <div className="about__avatar"> AVATAR</div>
                <div className="about__personal_data"> HELLO! </div>
            </div>
            <div className="about__posts">
            MY POSTS
                <div>
                    NEW POSTS
                </div>
                <div>
                    <div>POST_1</div>
                    <div>POST_2</div>
                </div>
            </div>        
      </div>       
    );
} 