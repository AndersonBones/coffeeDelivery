import styled from "styled-components";

export const CoffeeCartContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props=>props.theme['gray-200']};
    


    .coffeeImage{
        width: 4.25rem;
        height: 4.25rem;
    }

    .coffeeImage > img{
        width: 100%;
    }

    .coffeeBody{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .6rem;
    }

    .coffeeBody > span{
        color: ${props=>props.theme['gray-800']};
    }

    .coffeeActions{
        display: flex;
        
        align-items: center;
        justify-content: center;
        gap: .6rem;
    }

    .removeCoffee > button{
        border: none;
        border-radius: .3rem;
        padding: 5px;
        font-size: .8rem;
        color: ${props=>props.theme['gray-800']};
    }

    .removeCoffee > button > span:first-child{
        color: ${props=>props.theme['purple-300']};
    }
    

    .coffee-price{
        display: flex;
        height: 100%;
        font-size: 1.2rem;
        font-family: "Baloo 2", cursive;
        
        color: ${props=>props.theme['gray-800']};

        span{
            white-space: nowrap;

        }
       
    }

`

