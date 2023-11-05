import styled from "styled-components";



export const IntroContainer = styled.div`
    margin-top: 5rem;
    background-color: transparent;
    width: 100%;
    display: flex;
    padding: 5rem 1rem;
    justify-content: space-around;
    flex: 1;
    
`

export const IntroTitle = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;

    div > h1{
        font-size: 3rem;
        font-family: "Baloo 2", cursive;
        font-weight: 800;
        color: ${props=>props.theme['titulo']};
    }

    div > p{
        font-size: 22px;
        font-weight: 400;
        color: ${props=>props.theme['subtitulo']};
    }

`

export const IntroImage = styled.div`


`

export const IntroItems = styled.div`
    
    background-color: transparent;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
   
    span{
        color: ${props=>props.theme['subtitulo']};
    }
    ul{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    list-style: none; 
    gap: .8rem;

    span:first-child{
        
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: ${props=>props.theme['white']};
    }

    .item1{
        background-color: ${props=>props.theme['yellow-400']};
    }

    .item2{
        background-color: ${props=>props.theme['yellow-200']};
    }

    .item3{
        background-color: ${props=>props.theme['gray-800']};
    }

    .item4{
        background-color: ${props=>props.theme['purple-300']};
    }
`