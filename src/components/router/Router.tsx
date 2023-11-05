import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/home/Home'
import { CartContainer } from '../pages/cart/Cart'
import { Success } from '../pages/success/Success'

export const Router = ()=>{
    return (
        <Routes> 
            <Route path='/' element={<DefaultLayout></DefaultLayout>}>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/checkout' element={<CartContainer></CartContainer>}></Route>
                <Route path='/checkout/success' element={<Success></Success>}></Route>
            </Route>
            
        </Routes>
    )
}