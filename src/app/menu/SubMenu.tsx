import React, {type FunctionComponent} from 'react';
import MenuItem, {type Item} from './MenuItem';
import {View} from 'react-native';
import styles from './style';

interface ISubMenu {
  menu: Item[];
  selected: Record<string, Item>;
  ruleMismatch: Set<number>;
  onClick: (item: Item, index: number) => void;
  index: number;
}

const SubMenu: FunctionComponent<ISubMenu> = ({
  menu,
  selected,
  ruleMismatch,
  onClick,
  index,
}) => (
  <View style={styles.subMenu}>
    {menu.map(item => {
      const isDisabled =
        (index > 0 && selected[index - 1] === undefined) ||
        ruleMismatch.has(parseInt(item.id, 10));
      const isChecked = selected[index]?.id === item.id && !isDisabled;

      return (
        <MenuItem
          checked={isChecked}
          key={item.id}
          item={item}
          onClick={clickedItem => {
            onClick(clickedItem, index);
          }}
          disabled={isDisabled}
        />
      );
    })}
  </View>
);

export default SubMenu;
