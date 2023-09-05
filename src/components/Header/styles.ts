import styled from "styled-components";


export const HeaderContainer = styled.header`
  background: ${props => props.theme["white-100"]};
  color: ${props => props.theme["gray-500"]};
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.39);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.39);
  box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.39);
  padding: 1rem;
  margin-bottom:2rem; ;
  @media only screen and (max-width: 480px) {
    padding: 1.3rem 2rem 1.3rem 2rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-weight: 700;
  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ButtonLink = styled.a`
  cursor: pointer;
`