import {  createContext, useState, ReactNode, useEffect } from "react";

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

interface ItotalPrice{
    totalItemsPrice:number,
    deliveryPrice:number,
    total:number
}

interface InfoCheckout{
    road:string
    city:string
    paymentMethod:string
} 

interface ICoffeesContext{
    coffeesList:IselectedCoffees[],
    setAddCoffees: (coffee:IselectedCoffees) => void,
    updateCoffee:(coffee:IselectedCoffees, action:string) => void,
    removeCoffee:(id:number) => void,
    updatePrice:()=>void,
    totalPrice:ItotalPrice,
    setInfoCheckout: (info:InfoCheckout)=>void
    infoCheckout:InfoCheckout
}



export const CoffeeContext = createContext({} as ICoffeesContext)

export const CoffeeContextProvider = ({children}:CoffeeContextProps) =>{
    const [coffeesList, setCoffeesList] = useState<IselectedCoffees[]>(()=>{
        const storageCoffeesList = localStorage.getItem('coffees-storage')

        if(storageCoffeesList){
            return JSON.parse(storageCoffeesList)
        }
        
        return []
    })

    const [totalPrice, setTotalPrice] = useState<ItotalPrice>({
        deliveryPrice:0,
        totalItemsPrice:0,
        total:0
    })

    const [infoCheckout, setCheckout] = useState<InfoCheckout>({road:"", city:"", paymentMethod:""})

    const setAddCoffees = (coffee:IselectedCoffees)=>{
        setCoffeesList([...coffeesList, {
            id:coffee.id,
            image:coffee.image,
            name:coffee.name,
            price:coffee.price,
            amount:coffee.amount
        }])
        
    }

    
    const updateCoffee = (coffee:IselectedCoffees, action:string)=>{
        const updatedCoffeesList = coffeesList.flatMap((item)=>(item.id == coffee.id ?
            {
                id:coffee.id,
                image:coffee.image,
                name:coffee.name,
                price:coffee.price,
                amount: action == 'Increase' ? coffee.amount+1 : coffee.amount-1
            } : item))

        setCoffeesList(updatedCoffeesList)
    }

    const removeCoffee = (id:number)=>{
        setCoffeesList(coffeesList.filter((coffee)=>coffee.id != id))
    }

    const updatePrice = ()=>{
        let sumTotalItems = 0;
        const sumDeliveryPrice = 3.9 ;
      
        
        coffeesList.map(item=>{
            sumTotalItems+=(item.amount*item.price)
        })

        const sumTotal = sumTotalItems + sumDeliveryPrice;

        setTotalPrice({
            totalItemsPrice:sumTotalItems,
            deliveryPrice:sumDeliveryPrice,
            total:sumTotal
        })
    }


    const setInfoCheckout = (info:InfoCheckout)=>{
        setInfoCheckout(info)
    }

   
    useEffect(()=>{

        updatePrice();

        const coffeesJSON = JSON.stringify(coffeesList);
        localStorage.setItem('coffees-storage', coffeesJSON)

    },[coffeesList])
    

    


    return (
        <CoffeeContext.Provider
            value={{
                updateCoffee,
                coffeesList,
                setAddCoffees,
                removeCoffee,
                updatePrice,
                totalPrice,
                setInfoCheckout,
                infoCheckout
            }}>
            
        {children}
        </CoffeeContext.Provider>
    )
}