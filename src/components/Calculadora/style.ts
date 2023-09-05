import styled, { css } from "styled-components";

interface ContainerCalculatorProps {
    variant?: string;
  }
export const  Container = styled.div`
  display:flex ;
   flex-direction:column;
  align-items:center ;
  justify-content:center ;
  align-content:center ;
  margin-top:1rem ;
  margin-bottom:1rem ;

  h1 {
    font-size:1.5rem;
    color: ${props=>props.theme['black']};
   
  
  }
`;


export const ContainerCalculator = styled.div<ContainerCalculatorProps>`
  display:flex ;

  align-items:center ;
  justify-content:center ;
  align-content:center ;
  margin-top:0.7rem ;
  gap:0.6rem;
  h1 {
    font-size:1rem;
    color: ${props=>props.theme['black']};
    border:1px solid ${props => props.variant ? props.variant : '#000'} ;
   padding:0.4rem;
   border-radius:6px ;
   
  }
  p{
    color: ${props=>props.theme['black']};
    font-size: 1.2rem ;
    margin-bottom: 0.6rem;
  }
`;

export const ContainerOdds = styled.div`


label{
    flex-grow: 2;
    font-size:1.2rem;
    margin-right:0.1rem ;
    color: ${props=>props.theme['black']};
}
input{
    max-height:2rem ;
    font-size:1rem ;
    border-radius:6px ;
    padding-left:0.4rem;
    max-width:4rem ;
}

`;

export const  Total = styled.div`
  display:flex ;
   flex-direction:column;
  align-items:center ;
  justify-content:center ;
  align-content:center ;
  margin-top:1rem ;
  margin-bottom:1rem ;

  h1 {
    font-size:1.5rem;
    color: ${props=>props.theme['black']};
   
  
  }
`;
interface ModalProps{
    type:boolean
}
export const  Modal = styled.div<ModalProps>`
  width:100% ;
  display:flex ;
   flex-direction:column;
  margin-top:1rem ;
  margin-bottom:1rem ;
  background-color:#ccc ;
  border-radius:8px ;

  display:${props => props.type ? "block" : 'none'} ;
`;

export const HeaderCalculator = styled.div`
  display:flex ;
  width:100% ;
 
align-items:center ;
justify-content:space-between ;
align-content:center ;
div:nth-child(1){
    width:100% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    align-content:center ;
    margin-left:1rem ;

}
div:nth-child(2){
    margin-right:1rem ;
    svg{
        background-color:#c82020 ;
        margin-top:0.4rem;
        cursor:pointer;
    }

}
`