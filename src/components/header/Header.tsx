
import {ShoppingCart, MapPin, Coffee} from 'phosphor-react'
import { ActionsContainer, HeaderContainer, Location, CartButton} from './styles'
import {useContext} from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'


export const Header = () => {

    const {coffeesList} = useContext(CoffeeContext)
    const navigate = useNavigate();

    return (

        <HeaderContainer className='container' >
            <nav className='container'>
                <a href="/">
                    
                    <Coffee size={50}></Coffee>
                    <div>
                        <span>Coffee</span>
                        <span>Delivery</span>
                    </div>
                </a>

                <ActionsContainer>
                    <Location>
                        <MapPin size={22} weight="fill"></MapPin> Lucas do Rio Verde
                    </Location>

                    <CartButton onClick={()=>{navigate('/checkout')}} >
                        {coffeesList.length >= 1 && (<span>{coffeesList.length}</span>)}
                        
                        <ShoppingCart size={22} weight="fill"></ShoppingCart>
                    </CartButton>
                </ActionsContainer>
            </nav>

        </HeaderContainer>
    )
}