

import { Intro } from "../../intro/Intro"
import { Coffees } from "../../coffeesList/Coffees"
import { HomeContainer } from "./styles"


export const Home = () =>{
    return (
        <HomeContainer>    
            <Intro></Intro>
            <Coffees></Coffees>
        </HomeContainer> 
    )
}