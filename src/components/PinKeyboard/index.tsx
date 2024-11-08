import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";

export interface PinKeyboardProps {
    onKeyPress: (key: string | number) => void;
    onDelete: () => void;
    onSubmit: () => void;
}

export const PinKeyboard: React.FC<PinKeyboardProps> = ({ 
    onKeyPress,
    onDelete,
    onSubmit,
}) => {

  const keys = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['del', 0, 'ok']
    ];
   
    return (
      <View style={Styles.keyboardContainer}>
        {keys?.map((row, rowIndex) => (
          <View key={rowIndex}
            style={Styles.row}>
              {row.map((key, index) => (
                <TouchableOpacity
                  key={index}
                  style={Styles.keyButton}
                  onPress={() => {
                    if (key === 'del') {
                        onDelete();
                    } 
                     if (key === 'ok') {
                        onSubmit();
                    } 
                    if (typeof key === 'number') {
                        onKeyPress(key);
                    }
                }}
                >
                  <Text  style={Styles.keyText}>
                    {key === 'del' ? '⌫' : key === 'ok' ? '✓' : key}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </View>
    );
  };