import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 1.563rem;
  background: ${props => props.theme["white"]};
  color:  ${props => props.theme["black"]};
  font-weight: bold;
  padding: 0 4.25rem;
  height: 3.125rem;

  width: 100%;
  
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["green-hover"]};
  } 

  &:disabled {
    background:  ${props => props.theme["green-hover"]};
    color:  ${props => props.theme["gray-100"]};
    cursor: no-drop;
  }
`;