import styled from "styled-components";


export const SuccessContainer = styled.main`
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;

    .success-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
    }

    .success-info{
        ul{
            width: 100%;
            height: 100%;
            background-color: ${props=>props.theme['white']};
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
            overflow: hidden;
            padding: 2rem;
            border-radius: 5px 20px 5px;
        }
        padding:.3rem ;
        border-radius: 5px 20px 5px;
        background: linear-gradient(to right, ${props=>props.theme['yellow-400']}, red, ${props=>props.theme['purple-400']});
    }

    .success-title{
        h1{
            font-size: 2rem;
            color: ${props=>props.theme['yellow-400']};
            font-family: "Baloo 2", cursive;
            margin: 0;
        }

        p{
            font-size: 1.2rem;
            font-weight: 500;
            color: ${props=>props.theme['gray-900']};
        }
    }
`