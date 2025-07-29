import './App.css'
import {useEffect, useState, useRef} from 'react'
import { Movies } from './componentes/movies'
import { useMovies } from './hooks/useMovies'


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
  const { search, setSearch, error } = useSearch()
  const { mappedMovies, getMovie } = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div>
      <header className='page'>
        <form className='form' onSubmit={ handleSubmit }>
          <input style={{border: error ? '1px solid red' : 'none'}} value={search} onChange={handleChange} name='query' placeholder='Avengers, Star Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={ mappedMovies }/>
      </main>
    </div>

  )
}

export default App
