import React, {type FunctionComponent} from 'react';
import RadioButton from '../../components/RadioButton';

export interface Item {
  id: string;
  value: string;
}

export interface IMenuItem {
  item: Item;
  disabled?: boolean;
  onClick: (item: Item) => any;
  checked?: boolean;
}

const MenuItem: FunctionComponent<IMenuItem> = ({
  onClick,
  checked,
  disabled,
  item,
}) => (
  <RadioButton
    value={item}
    onPress={onClick}
    checked={checked}
    label={item.value}
    disabled={disabled}
  />
);

export default MenuItem;
