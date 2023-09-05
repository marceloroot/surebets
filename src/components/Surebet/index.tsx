import logoutImg from '../../assets/icons/logout.svg';
import { useAuth } from '../../contexts/Auth';
import { CasaConteiner, ContainerSurebets, HeaderContainer, IconCalc, LeagueStyle, ParteInferior } from './styles';

import {HeaderSuperiorContainer } from './styles';
import { Clipboard,Link,Plus,XSquare } from 'react-feather';
import { interfaceSurebets } from './interface';
import { Bookmakers } from '../../services/global/Enum/bokmakers';
import { Sports } from '../../services/global/Enum/sports';
import TimestampToDate from '../dateFormat';
import Calculadora from '../Calculadora';
import { Modal } from '../Calculadora/style';
import { useState } from 'react';
import { Periods } from '../../services/global/Enum/periods';
import { Variation } from '../../services/global/Enum/variations';


export function Surebet(primeiro:interfaceSurebets) {

  let novaAba1: Window | null;
  let novaAba2: Window | null;

  const [modal,setModal] = useState<boolean>(false)

  const {
    league,
    league_name,
    bookmaker_id,
    sport_id,
    home,
    bookmaker_event_name,
    bookmaker_league_name,
    started_at,
    period_id,
    bc_id,
    koef
  } = primeiro.primeiro;
  const {
    league:league_2,
    league_name:league_name_2,
    bookmaker_id:bookmaker_id_2,
    sport_id:sport_id_2,
    home:home_2,
    bookmaker_event_name: bookmaker_event_name_2,
    bookmaker_league_name:bookmaker_league_name_2,
    started_at:started_at_2,
    period_id:period_id_2,
    bc_id:bc_id_2,
    koef:koef_2
  
  } = primeiro.segundo;
  const bookmakerName = Bookmakers.find(res => res.id == bookmaker_id);
  const sportName = Sports.find(res => res.id ==sport_id);
  const period_Name = Periods.find(res=>res.id == period_id);
  const bc_idName = Variation.find(res=>res.id == bc_id);

  const bookmakerName_2 = Bookmakers.find(res => res.id == bookmaker_id_2);
  const sportName_2 = Sports.find(res => res.id ==sport_id_2);
  const period_Name_2 = Periods.find(res=>res.id == period_id_2);
  const bc_idName_2 = Variation.find(res=>res.id == bc_id_2);

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
    setModal(true);
  }

  function fecharAbas():void {
    if (novaAba1 && !novaAba1.closed) {
      novaAba1.close();
    }
    if (novaAba2 && !novaAba2.closed) {
      novaAba2.close();
    }
    setModal(false)
  }

  return (
    <>
    <HeaderContainer   variant="sup">
        <HeaderSuperiorContainer>
         <Plus  color="#fff" size={28}/>
         <h1>{sportName ? sportName.name : "Desconhecido"} | {period_Name?.name.toLocaleUpperCase()}</h1>
         <IconCalc>
         <Clipboard  color="#fff" size={18} onClick={()=>modal ? setModal(false): setModal(true)}/>
         </IconCalc>
        </HeaderSuperiorContainer>
      

    </HeaderContainer>
    <ContainerSurebets>
      <div>
        <CasaConteiner>
        <h1>{bookmakerName ? bookmakerName.name : "Desconhecido"} </h1>
         <TimestampToDate timestamp={started_at} />
        </CasaConteiner>
        <h1>{bookmaker_event_name ? bookmaker_event_name : "Desconhecido"} </h1>
        <p>{bc_idName?.name} - {'2.2'}</p>
        <LeagueStyle>
        <h1><span>{bookmaker_league_name ? bookmaker_league_name :"Desconhecido"}</span> <Link color="#2241ca" size={16} onClick={abrirAbasLadoDireito}/> <XSquare color="#ff5f5f" size={16} onClick={fecharAbas}/></h1>
        </LeagueStyle>
      </div>
      <div>
        <h1>{bookmakerName_2 ? bookmakerName_2.name : "Desconhecido"} <TimestampToDate timestamp={started_at_2} /></h1> 
        <h1>{bookmaker_event_name_2 ? bookmaker_event_name_2 : "Desconhecido"} </h1>
        <p>{bc_idName_2?.name} - {'2.2'}</p>
      
        <h1><span>{bookmaker_league_name_2 ? bookmaker_league_name_2 :"Desconhecido"}</span><Link color="#2241ca" size={16}  onClick={abrirAbasLadoDireito}/> <XSquare color="#ff5f5f" size={16} onClick={fecharAbas}/></h1>   
      </div>
    

    </ContainerSurebets>
   
    <Modal type={modal}>
    <Calculadora
     setModal={setModal} 
     primeiro={primeiro.primeiro}
     segundo={primeiro.segundo}
    
    />
    </Modal>
    <HeaderContainer variant="inf">
        <HeaderSuperiorContainer >
         <h1>3.4%</h1>
         <h1> Lucro Garantido</h1>
        
        </HeaderSuperiorContainer>

    </HeaderContainer>
    </>
  );
}