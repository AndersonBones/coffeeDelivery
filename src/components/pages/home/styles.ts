import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    background-image:url(${props=>props.theme['back']});
    background-repeat: no-repeat;
    background-size: contain;
    
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`