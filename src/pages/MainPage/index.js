import React from 'react';
import Row from "../../components/Row";
import Banner from "../../components/Banner";
import requests from "../../api/requests";


export default function MainPage() {
  return (
    <div>
    <Banner />

    <Row
    title="NXTFLIX ORIGINALS"
    id="NO"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
    />

    <Row title ="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
    <Row title ="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />

    <Row
    title="Action Movies"
    id="AM"
    fetchUrl={requests.fetchActionMovies}
    />

    <Row
    title="Comedy Movies"
    id="CM"
    fetchUrl={requests.fetchComedyMovies}
    />

    <Row
    title="Horror Movies"
    id="HM"
    fetchUrl={requests.fetchHorrorMovies}
    />

    <Row
    title="Romance Movies"
    id="RM"
    fetchUrl={requests.fetchRomanceMovies}
    />

    <Row
    title="Documentaries"
    id="DM"
    fetchUrl={requests.fetchDocumentaries}
    /></div>
  )
}
