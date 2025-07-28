import {useCatImage} from '../hooks/useCatImage'

export function Otro(){
    const {imageUrl} = useCatImage({fact: 'hola'})
    return(
        <>
            {imageUrl && <img src={imageUrl} alt="" />}
        </>
    )
}