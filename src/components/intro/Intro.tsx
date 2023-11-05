import { IntroContainer, IntroTitle, IntroItems, ListItem, IntroImage} from "./styles"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"
import coffee from '../../assets/coffee.svg'

export const Intro = ()=>{
    return (
        <IntroContainer className="container">
            <IntroTitle className="col-6" >
                <div>
                    <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>

                <IntroItems>
                    <ul>
                        <ListItem>
                            <span className="item1"><ShoppingCart size={20} weight="fill"></ShoppingCart></span>
                            
                            <span>Compra simples e segura</span>
                        </ListItem>
                        <ListItem>
                            <span className="item2"><Timer size={20} weight="fill"></Timer></span>
                            
                            <span>Entrega rápida e rastreada</span>
                        </ListItem>
                    </ul>

                    <ul>
                        <ListItem>
                            <span className="item3"><Package size={20} weight="fill"></Package></span>
                            
                            <span>Embalagem mantem café intacto</span>
                        </ListItem>
                        
                        <ListItem>
                            <span className="item4"><Coffee size={20} weight="fill"></Coffee></span>
                            
                            <span> O café chega fresquinho até você</span>
                        </ListItem>
                    </ul>
                    
                </IntroItems>
            </IntroTitle>

            <IntroImage>
                <img src={coffee} alt="" />
            </IntroImage>
        </IntroContainer>
    )
}