import { CoffeeItem, CoffeeImage } from "./styles"
import { ICoffee } from "../../data/coffees"
import { useState } from "react"
import { Plus, Minus, ShoppingCart} from "phosphor-react"
import {useContext} from 'react'
import { CoffeeContext } from "../../contexts/CoffeeContext"
import uniqid from 'uniqid';
import { CoffeeSetAmount } from "./styles"


interface PropsCoffee{
    item:ICoffee
}
export const Coffee = ({item}:PropsCoffee) =>{
    const {setAddCoffees} = useContext(CoffeeContext)

    const [amount, setAmount] = useState(1);

    const handleIncrement = () =>{
        setAmount(amount+1)
    }

    const handleDecrement = () =>{
        setAmount(amount-1)

        if(amount <= 1){
            setAmount(1)
        }
    }

    const handleAddCoffee = () =>{
        setAddCoffees(item, amount)
    }

    return (
        <CoffeeItem key={uniqid()}>
            <div className="coffee-header">
                <CoffeeImage>
                    <img  src={item.image} alt="" />
                </CoffeeImage>
                
                <div className="coffee-tags mb-3 d-flex ">{item.tags.map((tag, index)=>{
                    return (
                        <span key={index} className="text-center m-auto">{tag.toUpperCase()}</span>
                    )
                })}</div>
            </div>

            <div className="coffee-body text-center">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>

            <div className="coffee-footer">
                <p className="m-0">R$<span>{item.price}</span></p>

                <CoffeeSetAmount>
                    <button onClick={handleDecrement}><Minus></Minus></button>
                    <span>{amount}</span>   
                    <button onClick={handleIncrement}><Plus></Plus></button>
                </CoffeeSetAmount>
                
                <button onClick={handleAddCoffee} className="set-amount--cart-button">
                    <ShoppingCart size={20} weight="fill"></ShoppingCart>
                </button>
            </div>

        </CoffeeItem>
    )
}