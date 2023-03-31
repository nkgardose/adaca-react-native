import React, {FunctionComponent, PropsWithChildren} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './style';

interface IButton extends TouchableOpacityProps {}

const Button: FunctionComponent<PropsWithChildren<IButton>> = ({
  children,
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled ? styles.disabled : styles.normal]}
      {...rest}>
      {typeof children === 'string' ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
