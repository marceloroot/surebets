import React, { useEffect, useState } from 'react';
import { Container, ContainerCalculator, ContainerOdds, HeaderCalculator, Total } from './style';
import { XSquare } from 'react-feather';
import { CalculadoraI } from './inteface';
import { Bookmakers } from '../../services/global/Enum/bokmakers';
import { parse } from 'path';

function Calculadora({setModal,primeiro,segundo}:CalculadoraI) {
  const koef1 = parseFloat(primeiro.koef.toFixed(2))
  const koef2 = parseFloat(segundo.koef.toFixed(2))
  const [odds, setOdds] = useState<number>(koef1);
  const [stake, setStake] = useState<number>(100);
  const [profit, setProfit] = useState<number>(0);
  const [totalReturn, setTotalReturn] = useState<number>(0);

  const [odds_2, setOdds_2] = useState<number>(koef2);
  const [stake_2, setStake_2] = useState<number>(100);
  const [profit_2, setProfit_2] = useState<number>(0);
  const [totalReturn_2, setTotalReturn_2] = useState<number>(0);


  const calculateProfitAndReturn = () => {
    const profitResult = odds * stake - stake;
    const totalReturnResult = odds * stake;
    setProfit(profitResult);
    // setTotalReturn(totalReturnResult);



    const profitResult_2 = odds_2 * stake_2 - stake_2;
    const totalReturnResult_2 = odds_2 * stake_2;
    setProfit_2(profitResult_2);
    // setTotalReturn_2(totalReturnResult_2);


    setTotalReturn(stake + stake_2);
  };

  useEffect(()=>{
    calculateProfitAndReturn()
  },[odds,stake,odds_2,stake_2])
   const bookmakerName = Bookmakers.find(res => res.id == primeiro.bookmaker_id);
   const bookmakerName_2 = Bookmakers.find(res => res.id == segundo.bookmaker_id);
  return (
    <Container> 
     <HeaderCalculator>  
       <div><h1>Betting Calculator</h1></div>
       <div><XSquare  onClick={()=>setModal(false)}/></div>
     </HeaderCalculator>
     <ContainerCalculator>
     <h1>{bookmakerName?.name}</h1>
      <ContainerOdds>
    
        <label>Odds:</label>
        <input
          type="number"
          value={odds}
          onChange={(e) => setOdds(parseFloat(e.target.value))}
        />
      </ContainerOdds>


      <ContainerOdds>
      
        <label>Stake:</label>
        <input
          type="number"
          value={stake}
          onChange={(e) => setStake(parseFloat(e.target.value))}
        />
      </ContainerOdds>

      <ContainerOdds>
   
    
    </ContainerOdds>

    </ContainerCalculator>
    <ContainerCalculator>
     <p>Lucro: R$ {profit.toFixed(2)}</p>
    </ContainerCalculator>


     {/* Casa 2 */}
    <ContainerCalculator variant="#7b6161">
    <h1>{bookmakerName_2?.name}</h1>
      <ContainerOdds>
    
        <label>Odds:</label>
        <input
          type="number"
          value={odds_2}
          onChange={(e) => setOdds_2(parseFloat(e.target.value))}
        />
      </ContainerOdds>


      <ContainerOdds>
      
        <label>Stake:</label>
        <input
          type="number"
          value={stake_2}
          onChange={(e) => setStake_2(parseFloat(e.target.value))}
        />
      </ContainerOdds>


      
      {/* <button onClick={calculateProfitAndReturn}>Calculate</button>
      <div>
        <p>Lucro potencial: {profit.toFixed(2)}</p>
        <p>Retorno total: {totalReturn.toFixed(2)}</p>
      </div> */}
    </ContainerCalculator>

    <ContainerCalculator>
     <p>Lucro: R$ {profit_2.toFixed(2)}</p>
     </ContainerCalculator>


    <Total>
    <h1>Total: R$ {totalReturn.toFixed(2)}</h1>
    </Total>
    </Container>

  );
}

export default Calculadora;