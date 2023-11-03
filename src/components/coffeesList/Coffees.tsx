import { CoffeesContainer, CoffeesList} from "./styles"
import { Coffee } from "../coffees/Coffee"
import uniqid from 'uniqid';
import { coffees } from "../../data/coffees"

export const Coffees = () =>{

   
    
    return (
        <CoffeesContainer className="container d-flex flex-column gap-5 ">
            <h2 className="mt-5 mb-3">Nossos cafés</h2>

            <CoffeesList >
                {coffees.map(card=>{

                    return (
                        <Coffee key={uniqid()} item={card}></Coffee>
                    )
                })}
                
            </CoffeesList>
        </CoffeesContainer>
    )
}