import styled from "styled-components";


export const CoffeesContainer = styled.section`
    padding: 0;
    h2{
        font-family: "Baloo 2", cursive;
        color: ${props=>props.theme['gray-900']};
        font-weight: 600;
    }
`

export const CoffeesList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2.5rem 2rem;
    
`