import {  CoffeeContext, IselectedCoffees } from '../../../../contexts/CoffeeContext'
import {CoffeeCartContainer} from './styles'
import { CoffeeSetAmount } from '../../../coffees/styles'
import { Minus, Trash, Plus } from 'phosphor-react'
import {useContext, useState } from 'react'

interface CoffeeCartProps{
    children: never[]
    coffee:IselectedCoffees
}


export const CoffeeCart = ({coffee}:CoffeeCartProps) => {
    const { removeCoffee, updateCoffee} = useContext(CoffeeContext);

    const [amount, setAmount] = useState(coffee.amount)

    const handleIncrement = ()=>{
        setAmount(amount+1);
        updateCoffee(coffee, 'Increase')
    }

    const handleDecrement = ()=>{
        setAmount(amount-1)

        if(amount <= 1){
            setAmount(1)
        }

        updateCoffee(coffee, 'Decrease')
    }

    const handleRemoveCoffee = ()=>{
        removeCoffee(coffee.id)
    }
    
    return (
        <CoffeeCartContainer>
            <div className="coffeeImage">
                <img src={coffee.image} alt="" />
            </div>

            <div className="coffeeBody">
                <span>{coffee.name}</span>
                <div className="coffeeActions">
                    <CoffeeSetAmount>
                        <button onClick={handleDecrement} ><Minus></Minus></button>
                        <span>{amount}</span>
                        <button  onClick={handleIncrement} ><Plus></Plus></button>
                    </CoffeeSetAmount>
                    <div className="removeCoffee">
                        <button onClick={handleRemoveCoffee} className='d-flex'><span><Trash size={18}></Trash></span> <span>REMOVER</span> </button>
                    </div>
                </div>
            </div>

            <div className="coffee-price">
                <span>R$ {String(coffee.price.toFixed(2)).replace('.',',')}</span>
            </div>
        </CoffeeCartContainer>
    )
}