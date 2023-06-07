import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react';



const ShowList = () => {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          const data = await response.json();
          setShows(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    const handleShowClick = (showId) => {
        navigate(`/show/${showId}`);
      };
   
  
    return (
      <div className="container">
        <h1>Show List</h1>
        <ul className="show-list">
          {shows.map((show) => (
            <li key={show.show.id} className="show-list-item">
              <h3>{show.show.name}</h3>
              <p>Language: {show.show.language}</p>
              <p>{show.image}</p>
              <p>Genres: {show.show.genres.join(', ')}</p>
              <button onClick={() => handleShowClick(show.show.id)}>Show Summary</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default ShowList;