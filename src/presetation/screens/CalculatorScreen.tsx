import { Text, View } from 'react-native';
import { colors, styles } from '../theme/app-theme';
import CalculatorButton from '../componentes/calculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export default function CaculadoraScreen() {
  const {
    number,
    prevnumber,
    formula,
    bulildNumber,
    clean,
    deleteOperation,
    toggleSingle,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResoults}
        >
          {formula}
        </Text>
        {formula === prevnumber ? (
          <Text style={styles.subResults}> </Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.subResults}
          >
            {
              //es para que cuando el numero previo que es el de abajo este en 0 se desaparesca
              prevnumber
            }
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clean()}
          lable="C"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => toggleSingle()}
          lable="+/-"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => deleteOperation('del')}
          lable="del"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => divideOperation()}
          lable="÷"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => bulildNumber('7')}
          lable="7"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('8')}
          lable="8"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('9')}
          lable="9"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          lable="x"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => bulildNumber('6')}
          lable="6"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('5')}
          lable="5"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('4')}
          lable="4"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => subtractOperation()}
          lable="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => bulildNumber('3')}
          lable="3"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('2')}
          lable="2"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => bulildNumber('1')}
          lable="1"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => addOperation()}
          lable="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => bulildNumber('0')}
          lable="0"
          color={colors.darakGray}
          dobleSize
        />
        <CalculatorButton
          onPress={() => bulildNumber('.')}
          lable="."
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => calculateResult()}
          lable="="
          color={colors.orange}
        />
      </View>
    </View>
  );
}
