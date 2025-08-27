import { Text, View } from 'react-native';
import { colors, styles } from '../theme/app-theme';
import CalculatorButton from '../componentes/calculatorButton';

export default function CaculadoraScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResoults}>1500</Text>
        <Text style={styles.subResults}>150</Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          lable="C"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          lable="+/-"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => console.log('del')}
          lable="del"
          color={colors.lightGray}
          labelTextColor
        />
        <CalculatorButton
          onPress={() => console.log('/')}
          lable="/"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('7')}
          lable="7"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('8')}
          lable="8"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('9')}
          lable="9"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('x')}
          lable="x"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('6')}
          lable="6"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('5')}
          lable="5"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('4')}
          lable="4"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('-')}
          lable="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('3')}
          lable="3"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('2')}
          lable="2"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('1')}
          lable="1"
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('+')}
          lable="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          lable="0"
          color={colors.darakGray}
          dobleSize
        />
        <CalculatorButton
          onPress={() => console.log('.')}
          lable="."
          color={colors.darakGray}
        />
        <CalculatorButton
          onPress={() => console.log('=')}
          lable="="
          color={colors.orange}
        />
      </View>
    </View>
  );
}
