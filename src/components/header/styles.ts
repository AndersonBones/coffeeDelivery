import styled from "styled-components";

export const HeaderContainer = styled.header`
    nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        a{
            background-color: ${props=>props.theme['purple-100']};
            padding: .3rem .5rem;
            border-radius: .2rem;
            color: ${props=>props.theme['purple-300']};
            display: flex;
            align-items: center;
            gap: .5rem;
            div{
                font-weight: 700;
                display: flex;
                flex-direction: column;
                
            }
        }
    }
    padding: 1rem 0;
    border-bottom: 1px solid ${props=>props.theme['purple-100']};
`

export const ActionsContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;
`
export const CartButton = styled.button`
    
    position: relative;
    border: none;
    padding: .5rem .8rem;
    border-radius: .2rem;
    background-color: ${props=>props.theme['yellow-100']};
    color: ${props=>props.theme['yellow-400']};
    cursor: pointer;
    
    span{
        position: absolute;
        top: -10%;
        left: calc(75%);
        display: inline-flex;
        justify-content: center;
        font-size: .8rem;
        font-weight: 500;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
        text-align: center;
        align-items: center;
        background-color: ${props=>props.theme['yellow-400']};
        color: white;
    }
`


export const Location = styled.span`
    background-color: ${props=>props.theme['purple-100']};
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${props=>props.theme['purple-300']};
    padding: .5rem;
    border-radius: .2rem;
`