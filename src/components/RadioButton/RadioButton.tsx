import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

interface IRadioButton<P> {
  checked?: boolean;
  disabled?: boolean;
  onPress(value: P): any;
  label?: string;
  value: P;
}

function RadioButton<P>({
  onPress,
  value,
  disabled = false,
  label,
  checked = false,
}: IRadioButton<P>) {
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onPress(value)}
      disabled={disabled}>
      <Image
        style={styles.img}
        source={{
          uri: checked
            ? 'https://w7.pngwing.com/pngs/752/449/png-transparent-at-sign-computer-icons-radio-button-miscellaneous-monochrome-black-thumbnail.png'
            : 'https://e7.pngegg.com/pngimages/95/799/png-clipart-circle-radio-button-monochrome-black-thumbnail.png',
        }}
      />
      <View style={[styles.content]}>
        {label ? (
          <Text style={disabled ? styles.disabledText : styles.normal}>
            {label}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default RadioButton;
