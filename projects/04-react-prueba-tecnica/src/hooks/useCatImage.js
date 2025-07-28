import {useState, useEffect} from 'react'

export const useCatImage = ({ fact }) => {
    const[imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if(!fact) return
        const firstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWords}?fontSize=50&fontColor=white&json=true`)
            .then(res=> res.json())
            .then(response=> {
                const {url} = response
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}