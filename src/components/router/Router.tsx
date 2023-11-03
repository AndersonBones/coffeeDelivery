import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/home/Home'
import { CartContainer } from '../pages/cart/Cart'

export const Router = ()=>{
    return (
        <Routes> 
            <Route path='/' element={<DefaultLayout></DefaultLayout>}>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/order' element={<CartContainer></CartContainer>}></Route>
            </Route>
            
        </Routes>
    )
}