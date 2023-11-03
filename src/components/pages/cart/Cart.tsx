import { Cart, OrderCoffee, SelectedCoffees, ResumeOrder } from "./styles"
import { MapPin, CurrencyDollar, CreditCard, Bank,Money, Minus, Plus, Trash} from "phosphor-react"
import {useContext, useState} from 'react'
import { CoffeeContext } from "../../../contexts/CoffeeContext"
import { CoffeeSetAmount } from "../../coffees/styles"


export const CartContainer = () =>{

    const {coffeesList} = useContext(CoffeeContext)
    const [amount, setAmount] = useState(1)

    const handleIncrement = ()=>{
        
        setAmount(amount+1)
    }   

    const handleDecrement = ()=>{
        setAmount(amount-1)

        if(amount <= 1){
            setAmount(1)
        }
    }

    return(
        <Cart className="container">
            <OrderCoffee>
                <h1>Complete seu pedido</h1>

                <div className="order-container">
                    <div className="order-header">
                        <MapPin className="mapIn-icon" weight="fill" size={22}></MapPin>

                        <div className="address-title ">
                            <h3 className="m-0">Endereço de Entrega</h3>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>

                    <form className="fomulary-address ">
                        <div className="cep-container">
                            <input type="text" placeholder="CEP" id="cep" />
                        </div>
                        
                        <div className="rua-container">
                            <input type="text" placeholder="Rua" id="rua" />
                        </div>

                        <div className="num-container ">
                            <input type="number" id="num" placeholder="Número" />
                        </div>

                        <div className="complemento-container ">
                            <input type="text" placeholder="Complementar" />
                        </div>

                        <div className="bairro-container ">
                            <input type="text" placeholder="Bairro" />
                        </div>
                    
                        <div className="cidade-container ">
                            <input type="text" placeholder="Cidade" id="cidade" /> 
                        </div>     
                        
                        <div className="uf-container">
                            <input type="text" placeholder="UF" id="uf" />
                        </div>
                        
                        
                    </form>
                </div>

                <div className="payment-method">
                    <div className="order-header">
                        <CurrencyDollar className="dolar-icon" weight="fill" size={22}></CurrencyDollar>

                        <div className="payment-title d-flex flex-column">
                            <h3>Pagamento</h3>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </div>

                    <div className="payment-options">
                        <div className="credit">
                            <input type="radio" id="credit" value="crédito" name="paymentMethod" />
                            <label htmlFor="credit"><CreditCard size={20}></CreditCard> CARTÃO DE CRÉDITO</label>
                        </div>

                        <div className="debit">
                            <input type="radio" id="debit" value="débito"  name="paymentMethod" />
                            <label htmlFor="debit"><Bank size={20}></Bank> CARTÃO DE CRÉDITO</label>
                        </div>

                        <div className="money">
                            <input type="radio" id="money" value="dinheiro"  name="paymentMethod" />
                            <label htmlFor="money"><Money size={20}></Money> CARTÃO DE CRÉDITO</label>
                        </div>
                    </div>
                </div>

            </OrderCoffee>

            <SelectedCoffees>
                <h1>Cafés selecionados</h1>

                <div className="selectedCoffees-container">
                    {coffeesList.map(item=>{
                        return(
                            <div className="coffeeCart">
                                <div className="coffeeImage">
                                    <img src={item.image} alt="" />
                                </div>

                                <div className="coffeeBody">
                                    <span>{item.name}</span>
                                    <div className="coffeeActions">
                                        <CoffeeSetAmount>
                                            <button onClick={handleDecrement} ><Minus></Minus></button>
                                            <span>{amount}</span>   
                                            <button onClick={handleIncrement}><Plus></Plus></button>
                                        </CoffeeSetAmount>
                                        <div className="removeCoffee">
                                            <button><span><Trash size={18}></Trash></span> <span>REMOVER</span> </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="coffee-price">
                                    <span>R$ {item.price}</span>
                                </div>
                            </div>
                        )
                    })}


                    <ResumeOrder>
                        <div className="resume-container">
                            <div className="total-items">
                                <span>Total de itens</span>
                                <span>R$ 98,10</span>
                            </div>

                            <div className="frete">
                                <span>Entrega</span>
                                <span>R$ 3,90</span>
                            </div>

                            <div className="total-geral">
                                <span>Total</span>
                                <span>R$ 102,00</span>
                            </div>
                        </div>
                        
                        <button className="confirmeOrder-btn">CONFIRMAR PEDIDO</button>

                    </ResumeOrder>
                </div>
            </SelectedCoffees>
            
        </Cart>
    )
}