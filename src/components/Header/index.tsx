import logoutImg from '../../assets/icons/logout.svg';
import { useAuth } from '../../contexts/Auth';

import { ButtonLink, HeaderContainer, HeaderContent } from './styles';

export function Header() {

  const { user,logout } = useAuth(); // RECUPERAR USER PARA MOSTRAR SEU NOME

  return (
    <HeaderContainer>
      <HeaderContent>
        <span>{user}</span>
        <ButtonLink onClick={logout}>Sair {`\n`}
          <img src={logoutImg} />
        </ButtonLink>
      </HeaderContent>
    </HeaderContainer>
  );
}