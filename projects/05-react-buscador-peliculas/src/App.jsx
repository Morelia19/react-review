import './App.css'
import {useEffect, useState, useRef, useCallback} from 'react'
import { Movies } from './componentes/movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'


function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Debes ingresar un término de búsqueda')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se permiten números')
      return
    }

    if(search.length  < 3) {
      setError('Debes ingresar al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])
    
  return { search, setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading} = useMovies({search, sort})

  const debounceGetMovies = useCallback(
    debounce(search=>{
      getMovies({search})
  }, 300), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div>
      <header className='page'>
        <form className='form' onSubmit={ handleSubmit }>
          <input style={{border: error ? '1px solid red' : 'none'}} value={search} onChange={handleChange} name='query' placeholder='Avengers, Star Wars, The Matrix' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando... </p> : <Movies movies={ movies }/>
        }
      </main>
    </div>

  )
}

export default App
