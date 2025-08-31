import { useEffect, useRef, useState } from 'react';
enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}
export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  //este estado es para guardar el numero anterior en la parte de abajo de la calculadora
  const [prevnumber, setPrevnumber] = useState('0');
  //este useEffect es para para mostrar la operacion en la calculadora en el number osea en pantalla

  const lastOperator = useRef<Operator>();
  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(' ')[0];
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(`${number}`);
    }
  }, [number]);
  useEffect(() => {
    const subResul = calculetaSubresult();
    setPrevnumber(subResul.toString());
  }, [formula]);
  const clean = () => {
    setNumber('0');
    setPrevnumber('0');
    lastOperator.current = undefined;
    setFormula('');
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
    const result = calculetaSubresult();
    setNumber(result.toString());
    lastOperator.current = undefined;
    setPrevnumber('0');
  };
  const calculetaSubresult = (): number => {
    const [firstValune, Operation, secondValue] = formula.split(' ');
    //estos son las operaciones que se pueden realizar
    const num1 = Number(firstValune);
    const num2 = Number(secondValue);
    if (isNaN(num2)) {
      return num1 || 0;
    }
    switch (Operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        if (num2 === 0) {
          console.log('no se puede dividir por cero');
          return 0;
        }
        return num1 / num2;
      default:
        throw new Error('Operación no válida');
        return num1;
    }
  };

  return {
    //properties
    number,
    prevnumber,
    formula,
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
