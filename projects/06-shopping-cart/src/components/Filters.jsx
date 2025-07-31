import './Filters.css'
import { useState } from 'react'

export function Filters ({onChange}) {
    const [minPrice, setMinPrice] = useState(0)
    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        onChange(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de</label>
                <input type="range" id="price"min='0' max='1000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Muebles</option>
                    <option value="groceries">Alimentos</option>
                </select>
            </div>

        </section>
    )
}