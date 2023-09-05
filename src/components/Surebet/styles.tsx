import styled, { css } from "styled-components";

interface MinesProps {
  variant?: number;
}

export const HomeContainer = styled.div`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  
  padding: 1.875rem 1.25rem;

  header {
    img {
      width: 190px;
      height: 190px;
    }
  }

  @media only screen and (max-width: 480px) {
    header {
    img {
      width: 180px;
      height: 180px;
    }
  }
  }
`;

export const SpinnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.188rem;

  margin: 9.375rem 0;
  color: ${props => props.theme["white"]};
`;

interface HeaderContainerProps {
  variant: "sup" | "inf";
}
export const HeaderContainer = styled.div<HeaderContainerProps>`
  flex: 0.2; // 20% da altura do LadoEsquerdo
  background-color:${props => props.variant == 'sup' ? '#7aaad3 ' : '#1c476c' }; // Cor de fundo da parte superior
  width: 100%; // Garante largura total
  display: flex;
  height: 100%; // Certifique-se de que a tela inteira seja coberta em altura
  max-height:2rem ;
 
  ${props => props.variant == 'sup' && css`
       border-radius:6px 6px 0px 0px;
    
  `}

  ${props => props.variant == 'inf' && css`
       border-radius:0px 0px 6px 6px;
    
  `}
 
  margin-top:1rem ;
  min-height:2rem ;
  h1{
    font-size:1.3rem;
    color:${props => props.theme['white']} ;
    padding-left:1rem ;
  }

`;

export const HeaderSuperiorContainer = styled.div`
   flex:1;
   height: 100%;
   display: flex;
  align-items: center;
  justify-content: flex-start;
  svg{
    margin-left:0.6rem ;
  }

`;
export const IconCalc = styled.div`
   flex:1;
   height: 100%;
   display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  svg{
    margin-right:0.9rem ;

  }

`;





export const ParteInferior = styled.div`
  flex: 0.8; // 80% da altura do LadoEsquerdo
  background-color: #f4f3f3; // Cor de fundo da parte inferior
  width: 100%; // Garante largura total
  display: flex;
  flex-direction: column;
  gap:2px;
  margin-top:0.5rem ;

  justify-content: flex-start;

 

  h2{
 
    font-size: 1.1rem;
    color:${props => props.theme['gray-500']} ;
    font-weight:800 ;
  }


  h3{
  
      margin-bottom:1.8rem ;
      font-size: 1.1rem;
      color:${props => props.theme['gray-500']} ;
      font-weight:800 ;
      color:#3d3c3c  ;
      display:flex; 
      align-items:center ;
      justify-content:flex-start ;
      align-content:center ;


      span{
        font-size:0.8rem;
        text-align:center ;
        margin-left:0.3rem ;
        margin-top: 0.1rem ;
      }
      b{
        margin-left:0.5rem ;
        font-weight:900 ;
        font-size:1rem ;
     
      }
      svg {
        margin-left:0.3rem ;
        margin-top: 0.3rem ;
        cursor: pointer;
      }
    }
`;

export const ContainerSurebets = styled.div`
    
   width: 100%;
   margin-left:2.5rem;
   margin-top:1rem;
    h1{

      font-size: 1.1rem;
      color:#3d3c3c  ;
      font-weight:800 ;
  
      display:flex; 
      align-items:center ;
      justify-content:flex-start ;
      align-content:center ;
      margin-bottom:0.2rem ;

      span{
        font-size:0.8rem;
        text-align:center ;
        
        margin-top: 0.1rem ;
      }
      b{
        margin-left:0.5rem ;
        font-weight:900 ;
        font-size:1rem ;
     
      }
      svg {
        margin-left:0.3rem ;
        margin-top: 0.3rem ;
        cursor: pointer;
      }
    }

    p{  
      width:100% ;
      color:#3d3c3c  ;
      display:flex; 
      align-items:center ;
      justify-content:flex-start ;
      align-content:center ;
    font-size:0.9rem ;
    margin-right:0.4rem ;
    }
`
export const CasaConteiner = styled.div`
  
  display:flex;
  align-items:center ;
  justify-content:flex-start ;
  align-content:center ;
  margin:0;
  padding:0 ;
`

export const LeagueStyle = styled.div`
  margin-bottom:2rem ;
`










export const Botao = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff; // Cor de fundo do botão
  color: #fff; // Cor do texto do botão
  border: none;
  cursor: pointer;
`;



export const ButtonGeneratedHack = styled.div`
  display: flex;
  justify-content: left;

  width: 100%;
  margin-top: 100px;

  button {
    width: 382px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    }
  @media only screen and (max-width: 720px) {
    button {
      width: 100%;
    } 
  }
`;