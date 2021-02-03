import React from 'react';
import "./Banner.css";

const Banner = () => {

    const truncate = (string, n) =>{
        return string?.lenght > n ? string.substr(0,n-1) + "..." : string
    }

    return (
        <header className="banner" style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fAe1Ppt7o-6qIJuBTYAx2vOFls-xFqj8Lg&usqp=CAU")`, backgroundPosition:"center center" , backgroundSize:"cover"}}>
            <img src="" alt=""/>
            <div className="banner-contents">
                <h1 className="bannerTitle">MovieName</h1>
                <div className="banner-buttons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <h1 className="bannerDescription">{truncate("dlfjidshfidfhgiudsfiuhdsiufhdsuhfudsfbusdhfudgbvubgsufgbudbvuhdbvhujdsbvusdbvuhdsbvudsgfbusdyzgbhufbgfuhgbdufhbduvbdfuvbudshfusdfgbudfbodffvdfgidfhgvniodfhbnviudbzvfibdi",150)}</h1>
                <div className="banner--fadeBottom" />
            </div>
        </header>
    )
}

export default Banner;
