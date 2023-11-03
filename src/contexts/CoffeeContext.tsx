import {  createContext, useState, ReactNode } from "react";
import { ICoffee } from "../data/coffees";


interface CoffeeContextProps{
    children:ReactNode
}


export interface IselectedCoffees{
    id:number,
    image:string,
    name:string,
    amount:number,
    price:number
}


interface ICoffeesContext{
    coffeesList:IselectedCoffees[],
    setAddCoffees: (coffee:ICoffee, amount:number) => void
    
}

export const CoffeeContext = createContext({} as ICoffeesContext)

export const CoffeeContextProvider = ({children}:CoffeeContextProps) =>{
    const [coffeesList, setCoffeesList] = useState<IselectedCoffees[]>([])

    const setAddCoffees = (coffee:ICoffee, amount:number)=>{
        setCoffeesList([...coffeesList, {
            id:coffee.id,
            image:coffee.image,
            name:coffee.name,
            price:coffee.price,
            amount
        }])
        
    }


    return (
        <CoffeeContext.Provider
            value={{
                coffeesList,
                setAddCoffees
            }}>
            
        {children}
        </CoffeeContext.Provider>
    )
}