import { useState } from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };
  const deleteOperation = (deleteOper: string) => {
    let currenSing = '';
    let numeroeliminado;
    if (deleteOper) {
      if (number) {
        numeroeliminado = number.slice(0, -1);
        return setNumber(numeroeliminado);
      }
      if (number.includes('-')) {
        currenSing = '-';
        numeroeliminado = number.substring(1);
      }
    }
    setNumber('0');
  };
  const toggleSingle = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const bulildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    //startsWhit es inicia con un cero
    if (number.startsWith('0') || number.startsWith('-0')) {
      //esto es para poner el punto decimal si esta incluido en el numero no se vuelve a poner
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      //evaluar si es otro numero cero y no hay punto
      if ((number === '0' || number === '0') && !number.includes('.')) {
        return setNumber(number + numberString);
      }
      //evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      //evitar el 00000000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  return {
    //properties
    number,
    //methods
    bulildNumber,
    clean,
    deleteOperation,
    toggleSingle,
  };
};
