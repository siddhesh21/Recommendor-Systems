import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { localInstance } from "../axios";
function HomeScreen() {
  const user = useSelector(selectUser);
  console.log(localInstance);
  // localInstance
  //   .get(`getRecommendations?username=${user.email}&n=20`)
  //   .then((vales) => {
  //     console.log(vales);
  //   });

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row
        title="Recommended"
        fetchUrl={`getRecommendations?username=${user.email}&n=20`}
        isFromRecommendor={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default HomeScreen;
