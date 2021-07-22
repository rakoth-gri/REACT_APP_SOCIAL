import React from "react"
import about from './About.module.css'
import Posts from "./Posts/Posts"



export default function About() {
    return (
        <div className={about.about}>
            <img src="https://cdn.photosight.ru/img/7/085/4446369_large.jpg" alt="E-burg" className={about.pict} />
            <div className={about.ava_personal}>
                <div className={about.ava}> AVATAR</div>
                <div className={about.personal_info}> HELLO! </div>
            </div>
            <Posts/>      
      </div>       
    );
} 