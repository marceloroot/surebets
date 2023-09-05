import { useNavigate } from "react-router-dom";

import logoLogin from '../../assets/images/logo_login.png';
import userIcon from '../../assets/icons/person.svg';
import passwordIcon from '../../assets/icons/password.svg';

import { Input } from "../../components/Input";
import { ButtonDefault } from "../../components/Button";

import { useAuth } from "../../contexts/Auth";
import Recaptcha from '../../recaptcha';
import { CaptchaContainer, LabelForm, LoginContainer, LoginContent, LoginForm, LoginFormGroup } from "./styles";
import { useEffect, useState } from "react";

export function Recovery() {

  const { isAuthentication, recovery,loading,tentativas,setTentativas,recaptchaToken,setRecaptchaToken } = useAuth();
  const key = '6LcFqq8lAAAAAJdYbrU4V9UPwMWM-0cWFPGkjQrf'
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [senhaNew,setSenhaNew] = useState('');
 



  let timeInicial = localStorage.getItem('totalTimeSecondRecovery')
  const [totalTimeSecondRecovery,settotalTimeSecondRecovery] = useState((timeInicial ? parseInt(timeInicial):0));
  const minutes = Math.floor(totalTimeSecondRecovery / 60);
  const seconds =totalTimeSecondRecovery % 60;

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };
  useEffect(()=>{
    isAuthentication == true && navigate('/')
  },[])


  useEffect(()=>{
    const intervar = setInterval(() =>{
       if(totalTimeSecondRecovery == 0){
         return
       }else{
         settotalTimeSecondRecovery(totalTimeSecondRecovery -1);
         localStorage.setItem('totalTimeSecondRecovery',(totalTimeSecondRecovery -1).toString())
 
        }
     },1000)
     return()=>{
       setTentativas(0)
       clearInterval(intervar);
     }
   },[totalTimeSecondRecovery])


  function handleSubmit(e:any) {
    e.preventDefault();
    console.log('tentativa',tentativas)
    if(totalTimeSecondRecovery == 0){
    const dataLogin = {
      "email": email,
      "senha": senha,
      "senhaNova":senhaNew,
      //Rodrigo@2022

    };
    if(tentativas >= 3){
      settotalTimeSecondRecovery((0.2*60))
     }
    if(recaptchaToken){
      // Verifica se o token do reCAPTCHA é válido
      recovery(dataLogin); //HABILITAR ESSE MÉTODO QUANDO INTEGRAR COM API
     }else{
         alert('Captcha Invalido')
     }
    
    }

    
  }

  return (
    <LoginContainer>
      <LoginContent>
        <header>
          <img src={logoLogin} />
        </header>
    
        <LoginForm onSubmit={handleSubmit}>
        <LabelForm>Trocar Senha</LabelForm>
          <LoginFormGroup>
            <img src={userIcon} />
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              />
              <label>{}</label>
          </LoginFormGroup>

          <LoginFormGroup>
            <img
              src={passwordIcon}
              style={{
                padding: "19px 0px 0px 12px"
              }}
            />
            <Input
              id="password"
              type="password"
              placeholder="Senha Antiga"
              value={senha}
              onChange={(e)=>{setSenha(e.target.value)}}
            />
          </LoginFormGroup>


          <LoginFormGroup>
            <img
              src={passwordIcon}
              style={{
                padding: "19px 0px 0px 12px"
              }}
            />
            <Input
              id="passwordNew"
              type="passwordNew"
              placeholder="Senha Nova"
              value={senhaNew}
              onChange={(e)=>{setSenhaNew(e.target.value)}}
            />
          </LoginFormGroup>
          <CaptchaContainer>
          <Recaptcha sitekey={key} onChange={handleRecaptchaChange} />
          </CaptchaContainer>
          <ButtonDefault
            type="submit"
            disabled={loading  || !recaptchaToken ||  totalTimeSecondRecovery != 0}
          >
             {totalTimeSecondRecovery == 0 ? 'Recuperar' : `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}
          </ButtonDefault>
        </LoginForm>
      </LoginContent>
    </LoginContainer >
  );
}