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

        const road = document.getElementById('road') as HTMLInputElement
        const city = document.getElementById('city') as HTMLInputElement
        const num = document.getElementById('num') as HTMLInputElement
        const paymentMethod = document.getElementsByClassName('paymentMethod') as HTMLCollectionOf<HTMLInputElement>

        setInfoCheckout({
            road:road.value,
            city:city.value, 
            num:num.value,
            paymentMethod:paymentMethod[0].value
        })
        
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
                                <input type="text" placeholder="Rua" id="road" name="road" required />
                            </div>

                            <div className="num-container ">
                                <input type="number" id="num" placeholder="Número"  required />
                            </div>

                            <div className="complemento-container ">
                                <input type="text" placeholder="Complementar"  />
                            </div>

                            <div className="bairro-container ">
                                <input type="text" placeholder="Bairro" required />
                            </div>

                            <div className="cidade-container ">
                                <input type="text" placeholder="Cidade" id="city" name="city" required />
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
                                <input type="radio" id="credit" className="paymentMethod" value="Cartão de crédito" name="paymentMethod"  />
                                <label htmlFor="credit"><CreditCard size={20}></CreditCard> CARTÃO DE CRÉDITO</label>
                            </div>

                            <div className="debit">
                                <input type="radio" id="debit" className="paymentMethod" value="Cartão de débito" name="paymentMethod" />
                                <label htmlFor="debit"><Bank size={20}></Bank> CARTÃO DE DÉBITO</label>
                            </div>

                            <div className="money">
                                <input type="radio" id="money" className="paymentMethod" value="Dinheiro" name="paymentMethod"  />
                                <label htmlFor="money"><Money size={20}></Money> DINHEIRO</label>
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