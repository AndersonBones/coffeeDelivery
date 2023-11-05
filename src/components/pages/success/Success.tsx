import { MapPin, Timer, Money } from "phosphor-react"
import { SuccessContainer } from "./styles"
import { ListItem } from "../../intro/styles"
import Illustration from '../../../assets/Illustration.svg'

export const Success = ()=>{
    return(
        <SuccessContainer className="container">
            <div className="success-container">
                <div className="success-title">
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <div className="success-info">
                    <ul>
                        <ListItem>
                            <span className="item4"><MapPin size={20} weight="fill"></MapPin></span>
                            <span>Entrega em Rua da sabedoria, 3139 Lucas do Rio Verde</span>
                        </ListItem>

                        <ListItem>
                            <span className="item2"><Timer size={20} weight="fill"></Timer></span>
                            <span>Previsão de entrega <br />20 min - 30 min</span>
                        </ListItem>

                        <ListItem>
                            <span className="item1"><Money size={20} weight="fill"></Money></span>
                            <span>Pagamento na entrega <br />Cartão credito</span>
                        </ListItem>
                    </ul>
                </div>
            </div>
            
            <div className="success-image">
                <img src={Illustration} alt="" />
            </div>

        </SuccessContainer>
    )
}