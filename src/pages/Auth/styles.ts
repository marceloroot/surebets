import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${props => props.theme["gray-900"]};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const LoginContent = styled.div`

  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  
  padding: 1.875rem 1.25rem;
  border-radius: 0.5rem;

  header {
    padding-bottom: 1.25rem;
    display: flex;
    justify-content: center;

    img {
      width: 243px;
      height: 236px;
    }
  }

  span{
    display: flex;
    justify-content: center;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0.938rem 0;
`;

export const LoginFormGroup = styled.div`
  display: flex;
  flex-direction: column ;

  img {
    position: absolute;
    padding: 1rem;
  }

  > input {
    padding: 0.75rem  0.75rem 0.75rem 50px;
  }
`;

export const CaptchaContainer = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center; 
  justify-content: center; 
  align-content: center; ;
`;

export const LinkSenha = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color:${(props) =>props.theme['white-100']};
    font-size:0.9rem;
`