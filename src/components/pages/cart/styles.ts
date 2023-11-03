import styled from 'styled-components'

export const Cart = styled.section`
    padding-top: 5rem;
    
    display: flex;
    justify-content: space-between;
   

    h1{
        font-size: 20px;
        font-family: "Baloo 2", cursive;
        color: ${props=>props.theme['gray-800']};
    }
`

export const OrderCoffee = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .order-container{
        background-color: ${props=>props.theme['white']};
        border-radius: .2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .adrees-title{
            color: ${props=>props.theme['gray-800']};
        }

        .fomulary-address{
            
            display: grid;
            grid-template-columns: 12.5rem 17.25rem 3.75rem;
            grid-template-rows: repeat(4, 1fr);
            gap: 1rem 0.75rem;
           
         
            input{
                width: 100%;
                height: 2.625rem;
                padding: 0 .6rem;
                background-color: ${props=>props.theme['card-color']};
                border: 1px solid ${props=>props.theme['gray-100']};
                border-radius: .2rem;

                outline-color: ${props=>props.theme['yellow-200']};
            }

            .cep-container{
                grid-area: 1 / 1 / auto / 1;
            }

            .rua-container{
                grid-area: 2 / 1 / auto / 4;
                text-transform: uppercase;
            }

            .num-container{
                grid-area: 3 / 1 / auto / 1;
            }

            .complemento-container{
                grid-area: 3 / 2 / auto / 4;
            }

            .bairro-container{
                grid-area: 4 / 1 / auto / 1;
            }

            .cidade-container{
                grid-area: 4 / 2 / auto / 2;
            }

            .uf-container{
                grid-area: 4 / 3 / auto / 3;
            }
        }
    }
    .order-header{
        
        display: flex;
        gap: .5rem;

        .mapIn-icon{
            color: ${props=>props.theme['purple-300']};
        }
    }

    

    h3{
        font-size: 1rem;
    }

    .payment-method{
        background-color: ${props=>props.theme['white']};
    }


    .payment-method{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;

        .payment-title{
            h3{
                margin: 0;
            }
        }

        .dolar-icon{
            color: ${props=>props.theme['purple-300']};
        }

        .payment-options{
        
            display: flex;
            gap: 1rem;

            input{
                position: absolute;
                

                &:checked ~ label{
                    box-shadow: ${props=>props.theme['purple-300']} 0px 0px 0px 1px;
                }
            }

        
            
        
            label{
                position: relative;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                -webkit-box-align: center;
                align-items: center;
                background-color:  ${props=>props.theme['card-color']};
                border-radius: 6px;
                padding: 1rem;
                text-transform: uppercase;
                font-size: .9rem;
                transition: .2s ease-in-out;
             
            }   

            label:hover{
                background-color: ${props=>props.theme['gray-100']};
            }
        }

        .payment-options > div{
            display: block;
        }

        
    }
`

export const SelectedCoffees = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .selectedCoffees-container{
        background-color: ${props=>props.theme['white']};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: .2rem;
        padding: 2rem;
    }

    .coffeeImage{
        width: 4.25rem;
        height: 4.25rem;
    }

    .coffeeImage > img{
        width: 100%;
    }

    .coffeeCart{
        display: flex;
        align-items: center;
        gap: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props=>props.theme['gray-200']};
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
       
    }
    
`

export const ResumeOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .resume-container{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .resume-container > div{
        display: flex;
        justify-content: space-between;
    }
    .confirmeOrder-btn{
        border: none;
        padding: .8rem 1rem;
        border-radius: .3rem;
        color: ${props=>props.theme['white']};
        font-weight: 700;
        background-color: ${props=>props.theme['yellow-200']};
        transition: .2s ease-in-out;
    }

    .confirmeOrder-btn:hover{
        background-color: ${props=>props.theme['yellow-400']};
    }

`