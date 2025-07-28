import {useState, useEffect} from 'react';
import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import {Otro} from './components/otro'

export function App() {
    const {fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact }) 

    const handleclick = async () =>{
        refreshFact()
    }
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleclick}>Obtener nuevo hecho</button>

            <section>
                {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>

            <Otro />
        </main>
    )
}