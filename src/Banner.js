import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Banner.css";
import requests from './Requests';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.lenght - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    const truncate = (string, n) =>{
        return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
            backgroundPosition:"center center", 
            backgroundSize:"cover"}}>
            <img src="" alt=""/>
            <div className="banner-contents">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.originalName}</h1>
                <div className="banner-buttons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <h1 className="bannerDescription">{truncate(movie?.overwiev, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
