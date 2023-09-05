import { useEffect, useState } from "react";

import {

  Botao,
  DividirTela,

  LadoDireito,
  LadoEsquerdo,
  SearchInput,
  SearchInputContainer,

} from "./styles";
import { Surebet } from "../../components/Surebet";
import { Search } from "react-feather";
import axios from "axios";
import qs from 'querystring';
import { respsotaInfo, surebetInterface } from "./interface";
interface headerFilter {
  access_token:string,
  search_filter: string,
  per_page: string,
  grouped: string,
  sort_by: string,
}



export function Home() {
  const [info,setInfo] = useState<any>([])

  function getDados(){
    const dados : Record<string, string>  = {
      access_token:'26e71a6af2edd39349df4f66a9ab1243',
      search_filter: '806992',
      per_page: '30',
      grouped: 'true',
      sort_by: 'percent',
    } ;
    const formData = new URLSearchParams();
  
    for (const chave in dados) {
      formData.append(chave, dados[chave]);
    }
  
     axios.post('https://rest-api-pr.betburger.com/api/v1/arbs/bot_pro_search',formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data.bets);
      
     

      const novoArray: any[] = [];

        for (let i = 0; i < res.data.bets.length; i += 2) {
          if (i + 1 < res.data.bets.length) {
            const primeiroObjeto = res.data.bets[i];
            const segundoObjeto = res.data.bets[i + 1];

            const novoObjeto = {
              primeiro: primeiroObjeto,
              segundo: segundoObjeto
            };

            novoArray.push(novoObjeto);
          }
        }
         setInfo(novoArray);
       //  console.log(novoArray);

    }).catch(err=>{
      console.log(err);
    });
  
   
  
  }
 useEffect(()=>{
      getDados();
 },[])
  const [loading, setLoading] = useState<boolean>(false);



  
  let novaAba1: Window | null;
  let novaAba2: Window | null;
  

  function abrirAbasLadoDireito():void {
    const url1 = 'https://www.bet365.com/#/HO/';
    const url2 = 'https://www.betfair.com/br';
  
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
  
    const larguraNovaAba = larguraTela / 3;
    const coordenadaX = larguraTela - larguraNovaAba; // Definindo a coordenada X para o lado direito
    const coordenadaY = 100; // Definindo a coordenada Y para o topo da tela
  
     novaAba1 = window.open(url1, '_blank', `width=${larguraNovaAba},height=${alturaTela}`);
    if (novaAba1) {
      novaAba1.moveTo(coordenadaX -400 , coordenadaY);
    }
  
     novaAba2 = window.open(url2, '_blank', `width=${larguraNovaAba},height=${alturaTela}`);
    if (novaAba2) {
      novaAba2.moveTo(coordenadaX + larguraNovaAba, coordenadaY); // Posiciona a segunda aba ao lado da primeira
    }
  }


  function fecharAbas():void {
    if (novaAba1 && !novaAba1.closed) {
      novaAba1.close();
    }
    if (novaAba2 && !novaAba2.closed) {
      novaAba2.close();
    }
  }

  return (
    <DividirTela>

    <LadoEsquerdo>
    <SearchInputContainer>
      <SearchInput>
        <Search color="#000" size={20}/>
        <input />
      </SearchInput>
    </SearchInputContainer>
      {info.map((res : respsotaInfo) =>(
        <>
        {console.log(res.primeiro)}
          <Surebet primeiro={res.primeiro} segundo = {res.segundo}/>

          </>
          ))}

     

    {/* <Botao onClick={abrirAbasLadoDireito}>Abrir telas </Botao>
    <Botao onClick={fecharAbas}>Fechar Telas</Botao>  */}
    </LadoEsquerdo>
    <LadoDireito>
      {/* Conteúdo do lado direito */}
    </LadoDireito>
  </DividirTela>



   


  
  );
};