import styled from "styled-components";

export const CoffeeItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.theme['card-color']};
    align-items: center;
    padding: 1rem ;
    margin: auto;
    border-radius: 5px 20px 5px;
    .coffee-header{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .coffee-tags{
        gap: .5rem;

        span{
            padding: .3rem .5rem;
            border-radius: 1rem;
            background-color: ${props=>props.theme['yellow-100']};
            color: ${props=>props.theme['yellow-400']};
            font-size: .8rem;
            font-weight: 700;
        }
    }

    .coffee-body{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3{
            font-family: "Baloo 2", cursive;
            font-size: 1.2rem;
            color: ${props=>props.theme['gray-900']};
        }

        p{
            color: ${props=>props.theme['gray-500']};
        }
    }

    .coffee-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .6rem;

       p{
            color: ${props=>props.theme['gray-800']};
            font-family: "Baloo 2", cursive;

            span{
                
                font-size: 2rem;
                font-weight: bold;
            }
       }
        
        .set-amount--cart-button{
            border: none;
            color: white;
            padding: 5px 10px;
            border-radius: .3rem;
            background-color: ${props=>props.theme['purple-400']};
            transition: .2s ease-in-out;
        }

        .set-amount--cart-button:hover{
            background-color: ${props=>props.theme['purple-300']};
        }
    }
    
`

export const CoffeeSetAmount = styled.div`
    padding: 5px;
    border-radius: .3rem;
    background-color: ${props=>props.theme['gray-200']};
    button{
        display: inline-block;
        border: none;
        background-color: transparent;
        color: ${props=>props.theme['purple-300']};
    }
`

export const CoffeeImage = styled.div`
    width: 7.5rem;
    margin: auto;
    position: relative;
    bottom: 2rem;
`