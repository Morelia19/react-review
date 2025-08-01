import {Products} from './components/Products'
import {products as initialProducts} from './mocks/products'
import {useState} from 'react'
import {Header} from './components/Header'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return (
    <>
    <Header changeFilter = {setFilters}/>
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
