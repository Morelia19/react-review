import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <header className='page'>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>
    </div>

  )
}

export default App
