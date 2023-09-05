export const getTokenLocalStorage = () => {
  return localStorage.getItem('@TerabyteTecnologia-:token-1.0.0') !== 'undefined' ?
    localStorage.getItem('@TerabyteTecnologia-:token-1.0.0') :
    false;
};

export const getUserLocalStorage = () => {
  return localStorage.getItem('@TerabyteTecnologia-:user') !== 'undefined' ?
    localStorage.getItem('@TerabyteTecnologia-:user') :
    '';
};