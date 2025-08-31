import { useRef, useState } from 'react';
enum Operator {
  add,
  subtract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  //este estado es para guardar el numero anterior en la parte de abajo de la calculadora
  const [prevnumber, setPrevnumber] = useState('0');

  const lastOperator = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevnumber('0');
  };
  const deleteOperation = (deleteOper: string) => {
    //let currenSing = '';
    let numeroeliminado;
    if (deleteOper) {
      if (number) {
        numeroeliminado = number.slice(0, -1);
        return setNumber(numeroeliminado);
      }
      if (number.includes('-')) {
        //currenSing = '-';
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
      if (numberString === '0' && number.includes('.')) {
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
  const setLastNumber = () => {
    //si termina en un punto y pretende realizar una operación lo detiene
    if (number.endsWith('.')) {
      setPrevnumber(number.slice(0, -1));
    } else {
      setPrevnumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    //en este metodo se establece la validacion anterior y despues la operación
    setLastNumber();
    lastOperator.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.add;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.subtract;
  };
  //este metodo se encarga de realizar la operación
  const calculateResult = () => {
    //estos son las operaciones que se pueden realizar
    const num1 = Number(number);
    const num2 = Number(prevnumber);
    switch (lastOperator.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevnumber('0');
  };

  return {
    //properties
    number,
    prevnumber,
    //methods
    bulildNumber,
    clean,
    deleteOperation,
    toggleSingle,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  };
};
