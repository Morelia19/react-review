import {Filters} from './Filters'
export function Header ({changeFilter}) {
    return (
        <header>
            <h1>Shopping Cart</h1>
            <Filters onChange={changeFilter}/>
        </header>
    )
}