import { Pressable, Text } from 'react-native';
import { colors, styles } from '../theme/app-theme';

interface Props {
  lable: string;
  color?: string;
  dobleSize?: boolean;
  labelTextColor?: boolean;
  onPress: () => void;
}
export default function CalculatorButton({
  lable,
  color = colors.orange,
  dobleSize = false,
  labelTextColor = false,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        width: dobleSize ? 170 : 70,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: labelTextColor ? 'black' : 'white',
        }}
      >
        {lable}
      </Text>
    </Pressable>
  );
}
