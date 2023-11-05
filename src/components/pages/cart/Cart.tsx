import { Cart, OrderCoffee, SelectedCoffees, ResumeOrder } from "./styles"
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import { useContext } from 'react'
import { CoffeeContext } from "../../../contexts/CoffeeContext"
import { CoffeeCart } from "./coffeeCart/CoffeeCart"
import uniqid from 'uniqid'
import { useNavigate } from 'react-router-dom'

export const CartContainer = () => {

    const { coffeesList, totalPrice, setInfoCheckout } = useContext(CoffeeContext)

    const hasCoffeesCart = coffeesList.length >= 1 ? false : true
    const navigate = useNavigate();

    const handleConfirmCheckout = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        
        navigate('/checkout/success')
    }

    return (
        <Cart className="container">
            <form onSubmit={handleConfirmCheckout}>
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

                        <div className="fomulary-address ">
                            <div className="cep-container">
                                <input type="text" placeholder="CEP" id="cep" required />
                            </div>

                            <div className="rua-container">
                                <input type="text" placeholder="Rua" id="rua" required />
                            </div>

                            <div className="num-container ">
                                <input type="number" id="num" placeholder="Número" required />
                            </div>

                            <div className="complemento-container ">
                                <input type="text" placeholder="Complementar" required />
                            </div>

                            <div className="bairro-container ">
                                <input type="text" placeholder="Bairro" required />
                            </div>

                            <div className="cidade-container ">
                                <input type="text" placeholder="Cidade" id="cidade" required />
                            </div>

                            <div className="uf-container">
                                <input type="text" placeholder="UF" id="uf" required />
                            </div>


                        </div>
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
                                <input type="radio" id="debit" value="débito" name="paymentMethod" />
                                <label htmlFor="debit"><Bank size={20}></Bank> CARTÃO DE CRÉDITO</label>
                            </div>

                            <div className="money">
                                <input type="radio" id="money" value="dinheiro" name="paymentMethod" />
                                <label htmlFor="money"><Money size={20}></Money> CARTÃO DE CRÉDITO</label>
                            </div>
                        </div>
                    </div>

                </OrderCoffee>

                <SelectedCoffees>
                    <h1>Cafés selecionados</h1>

                    <div className="selectedCoffees-container">

                        {coffeesList.map(item => {
                            return (
                                <CoffeeCart key={uniqid()} coffee={item}>

                                </CoffeeCart>
                            )
                        })}

                        <ResumeOrder>
                            <div className="resume-container">
                                <div className="total-items">
                                    <span>Total de itens</span>
                                    <span>R$ {String(totalPrice.totalItemsPrice.toFixed(2)).replace('.', ',')}</span>
                                </div>

                                <div className="frete">
                                    <span>Entrega</span>
                                    <span>R$ {String(totalPrice.deliveryPrice.toFixed(2)).replace('.', ',')}</span>
                                </div>

                                <div className="total-geral">
                                    <span>Total</span>
                                    <span>R$ {String(totalPrice.total.toFixed(2)).replace('.', ',')}</span>
                                </div>
                            </div>

                            <button type="submit" disabled={hasCoffeesCart} className="confirmeOrder-btn">CONFIRMAR PEDIDO</button>

                        </ResumeOrder>
                    </div>
                </SelectedCoffees>
            </form>


        </Cart>
    )
}