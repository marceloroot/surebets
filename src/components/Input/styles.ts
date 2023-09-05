import styled from "styled-components";

export const BaseInput = styled.input` 

  border: 2px solid #29511F;
  border-radius: 1.563rem;

  background: transparent;
  color: ${props => props.theme["white"]};

  padding: 0.75rem;

  &::placeholder {
    color: ${props => props.theme["green-700"]};
  }

  font-size: 1.125rem;

`;
