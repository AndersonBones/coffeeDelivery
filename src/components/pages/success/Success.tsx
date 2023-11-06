import { MapPin, Timer, Money } from "phosphor-react"
import { SuccessContainer } from "./styles"
import { ListItem } from "../../intro/styles"
import Illustration from '../../../assets/Illustration.svg'
import { useContext } from "react"
import { CoffeeContext } from "../../../contexts/CoffeeContext"


export const Success = ()=>{

    const {infoCheckout} = useContext(CoffeeContext);


    return(
        <SuccessContainer className="success container">
            <div className="success-container">
                <div className="success-title">
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <div className="success-info">
                    <ul>
                        <ListItem>
                            <span className="item4"><MapPin size={20} weight="fill"></MapPin></span>
                            <span>Entrega em <b>{infoCheckout.road}, {infoCheckout.num}</b> Lucas do Rio Verde</span>
                        </ListItem>

                        <ListItem>
                            <span className="item2"><Timer size={20} weight="fill"></Timer></span>
                            <span>Previsão de entrega <br /> <b>20 min - 30 min</b></span>
                        </ListItem>

                        <ListItem>
                            <span className="item1"><Money size={20} weight="fill"></Money></span>
                            <span>Pagamento na entrega <br /> <b>{infoCheckout.paymentMethod}</b></span>
                        </ListItem>
                    </ul>
                </div>
            </div>
            
            <div className="success-image text-center">
                <img src={Illustration} alt="" />
            </div>

        </SuccessContainer>
    )
}