import withoutResults from '../mocks/noResults.json'
import withResults from '../mocks/withResults.json'
import { useState } from "react"

export const useMovies = ({search}) =>{
    const [responseMovies, setResponseMovies] = useState([])
    const movies = responseMovies.Search

    const mappedMovies =movies?.map(movie =>({
      id:movie.imdbID,
      title:movie.Title,
      year:movie.Year,
      poster:movie.Poster
    }))

    const getMovie = () =>{
        if(search) {
            //setResponseMovies(withResults)
            fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
                .then(res => res.json())
                .then(json => setResponseMovies(json))
        }
        else{
            setResponseMovies(withoutResults)
        }
    }
  
    return { mappedMovies, getMovie  }
  }

