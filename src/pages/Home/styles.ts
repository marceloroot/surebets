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

export const DividirTela = styled.div`
  display: flex;
  height: 100%; // Certifique-se de que a tela inteira seja coberta em altura
  margin-left:0.6rem ;
`;



export const LadoEsquerdo = styled.div`
flex: 0.3; // 30% da largura
display: flex;
flex-direction: column; // Empilhe os elementos verticalmente
align-items: center; // Centralize os elementos verticalmente
justify-content: center; // Centralize os elementos horizontalmente

`;
export const SearchInputContainer = styled.div`
  background-color:#1c476c ;
  flex:1;
  width: 100% ;
  display:flex;
  padding-left:0.5rem ;
  padding-top:0.4rem;
  padding-bottom:0.7rem;
  border-radius:6px 6px 6px 6px ;
`
export const SearchInput = styled.div`
  background-color:#9bbdda ;
  padding-left:0.5rem ;
  display:flex;
  align-items:center;

  flex-direction: row;
  justify-content: flex-start;
  border:none !important;
  border-radius: 4px ;
  div{
    
  }
  input{
    flex:1;
    
    border:none !important;
    margin-left:0.4rem ;
    margin-right:0.2rem ;
    font-size:14px;
    min-height:1.5rem ;
    background-color:#9bbdda ;
    
    
    
  }
  

`;
export const LadoDireito = styled.div`
  flex: 0.8; // 70% da largura
  background-color: #f0f0f0; // Cor de fundo do lado direito
  // Adicione estilos adicionais conforme necessário
`;



export const ParteSuperior = styled.div`
  flex: 0.2; // 20% da altura do LadoEsquerdo
  background-color: #dddd; // Cor de fundo da parte superior
  width: 100%; // Garante largura total
  display: flex;
  align-items: center;
  justify-content: center;
  max-height:2rem ;
`;

export const ParteInferior = styled.div`
  flex: 0.8; // 80% da altura do LadoEsquerdo
  background-color: #f4f3f3; // Cor de fundo da parte inferior
  width: 100%; // Garante largura total
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:6rem ;
`;


export const Botao = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff; // Cor de fundo do botão
  color: #fff; // Cor do texto do botão
  border: none;
  cursor: pointer;
`;



export const AccessGame = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  position: relative;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme["white"]};

  
  @media only screen and (max-width: 480px) {
    top: 1.125rem;
    }
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


