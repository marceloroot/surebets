import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { HttpAuth } from '../../config/http';
import { useNavigate } from "react-router-dom";

import { getTokenLocalStorage, getUserLocalStorage } from '../../services/global/endPoints';

import { AuthContextProps, AuthContextProviderType, LoginProps,RecoveryProps } from './interface';

const AuthContext = createContext({} as AuthContextProps);



export function AuthContextProvider({ children }: AuthContextProviderType) {

   const isAuthentication = !!getTokenLocalStorage();// HABILITAR QUANDO FOR INTEGRAR API
   const user = getUserLocalStorage();
  const navigate = useNavigate();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tentativas,setTentativas] =useState<number>(0);
  let timeInicial = localStorage.getItem('totalTimeSecondGeral')
  const [totalTimeSecondGeral,settotalTimeSecondGeral] = useState((timeInicial ? parseInt(timeInicial):0));
  const minutes = Math.floor(totalTimeSecondGeral / 60);
  const seconds =totalTimeSecondGeral % 60;

  useEffect(()=>{
    const intervar = setInterval(() =>{
       if(totalTimeSecondGeral == 0){
         return
       }else{
         settotalTimeSecondGeral(totalTimeSecondGeral -1);
         localStorage.setItem('totalTimeSecondGeral',(totalTimeSecondGeral -1).toString())
 
        }
     },1000)
     return()=>{
     
       clearInterval(intervar);
     }
   },[totalTimeSecondGeral])

  const login = (credentials: LoginProps) => {
    setLoading(true);
    // CHAMADA DE API DE LOGIN AQUI
    if(totalTimeSecondGeral == 0){
    HttpAuth.post('/usuario/authenticate',credentials,{
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': recaptchaToken,
      }
    }).then(res =>{
  
      if(res.data.situacao == true){
        localStorage.setItem('@TerabyteTecnologia-:token-1.0.0',res.data.access_token);
        localStorage.setItem('@TerabyteTecnologia-:user',res.data.data.nome)
        setTentativas(0);
        settotalTimeSecondGeral((5*60))
        HttpAuth.get('/estrategia/showminer',{
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': res.data.access_token,
          }
      
        }).then(res=>{
          console.log("final",res.data)
          localStorage.setItem('@TerabyteTecnologia-:estrategia',JSON.stringify(res.data));
          console.log(JSON.stringify(res.data))
        })
        
        
     
        navigate("/");  //REMOVER ESTE NAVIGATE APÓS INTEGRAR COM API
      }else{
        setTentativas(tentativas+1);
        location.reload(); //REMOVER ESTE NAVIGATE APÓS INTEGRAR COM API
        alert(res.data.error)
      }
      setLoading(false);
     })
    }else{
      alert("Aguarde o prazo de espera para logar e atualize a tela após o términio")
      setLoading(false);
      location.reload()
    
    }
    
  };

  const recovery = (credentials: RecoveryProps) => {
    setLoading(true);
    // CHAMADA DE API DE LOGIN AQUI
    HttpAuth.post('/usuario/recovery',credentials,{
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': recaptchaToken,
      }
    }).then(res =>{
    
      if(res.data.situacao == true){
        setTentativas(0);
        navigate("/login");  
      }else{
      
        setTentativas(tentativas+1);
        if(res.data.error){
          alert(res.data.error)
        }else{
         alert(res.data.msg)
        }
        location.reload();
      }
      setLoading(false)
    })
    
  };
 
 
  const logout =()=>{
     localStorage.clear();
     navigate("/login");
  }
  

   function verificaUsoUnico(){
    try{
          let token = localStorage.getItem('@TerabyteTecnologia-:token-1.0.0');
          HttpAuth.put('/usuario/usounico',{
                token: token
              }).then(resaxios =>{
                if(resaxios){
                  if(resaxios.data.codigo == 1){
                    console.log('logout')
                 
                    logout();
                  
                  }
                }
              }).catch(error=>{            
                console.log('logout')
                logout();
              
              })
      
        
    }catch{
      
      console.log('logout')
      
      logout();
      
    }
  }
  return (
    <AuthContext.Provider
      value={{
        login: (credentials: LoginProps) => login(credentials),
        recovery: (credentials: RecoveryProps) => recovery(credentials),
        logout,
        verificaUsoUnico,
        setTentativas,
        minutesGeral:minutes,
        secondsGeral:seconds,
        tentativas,
        totalTimeSecondGeral,
        isAuthentication,
        loading,
        user,
        recaptchaToken,
        setRecaptchaToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};