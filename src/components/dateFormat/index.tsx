import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importe o local desejado
import { TimeStyled } from './style';
interface Props {
    timestamp: number;
  }
  
  function TimestampToDate({ timestamp }: Props) {
    const date = new Date(timestamp * 1000);
  
    const formattedDate = format(date, 'dd MMMM HH:mm', { locale: ptBR });
  
    return (
      <TimeStyled>
        {formattedDate}
      </TimeStyled>
    );
  }
  
  export default TimestampToDate;