import axios from '../../api/axios';
import React, {useState, useEffect}from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  const navigate= useNavigate();

  const [searchResults, setsearchResults] = useState([]);
  const useQuery=()=> {
    return new URLSearchParams(useLocation().search);
  };

  let query= useQuery();
  const searchTerm= query.get("q");
  const debouncedSearchTerm= useDebounce(query.get("q"),500);
  

  useEffect(() => {
    if(debouncedSearchTerm){
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  const fetchSearchMovie = async(searchTerm)=> {
    console.log("searchTerm",searchTerm)
    try{
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setsearchResults(request.data.results);
    }catch(error){
      console.log("error",error);
    }
  };


  const renderSearchResults=()=> {
    return searchResults.length>0?(
      <section className='search-container'>
        {searchResults.map((movie)=> {
          if (movie.background_path!==null&&movie.media_type!=="person"){
            const movieImageUrl=
            "https://image.tmdb.org/t/p/w500"+movie.background_path;
            return(
              <div className='movie' key={movie.id}>
                <div onClicked={()=> navigate(`/$movie.id`)} className='movie__column-poster'>
                  <img src={movieImageUrl} alt="movie" className='movie__Poster' />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) :(
      <section className='no-results'>
        <div className='no-results__text'>
          <p>
            Your search for "{debouncedSearchTerm}" did not have any matchs/
          </p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
          </ul>
        </div>

      </section>
    )
  }

return renderSearchResults();
  
}

