import React, {
  FunctionComponent,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Button from '../../components/Button';
import {Item} from './MenuItem';
import styles from './style';
import SubMenu from './SubMenu';

type Rule = Record<string, number[]>;

interface IMenu {
  menu: Item[][];
  rules: Rule;
}

const Menu: FunctionComponent<PropsWithChildren<IMenu>> = ({menu, rules}) => {
  const [selected, setSelected] = useState<Record<string, Item>>({});
  const flattenedSelected = useMemo(() => Object.values(selected), [selected]);

  const ruleMismatch = useMemo(
    () =>
      new Set(
        flattenedSelected.reduce((accumulator: number[], item: Item) => {
          const mismatch = rules[item.id];
          if (mismatch !== undefined) {
            return [...accumulator, ...mismatch];
          }
          return accumulator;
        }, []),
      ),
    [flattenedSelected, rules],
  );

  const onSelect = (item: Item, index: number): void => {
    setSelected(() => {
      let toDelete: number[] = rules[item.id] ?? [];
      let last = 0;
      const newSelected = flattenedSelected.reduce((accumulator, item, i) => {
        if (!toDelete.includes(parseInt(item.id, 10)) && i === last) {
          last += 1;
          toDelete = [...toDelete, ...(rules[item.id] ?? [])];
          return {...accumulator, [i]: item};
        }
        return accumulator;
      }, {});

      return {...newSelected, [index]: item};
    });
  };

  return (
    <View style={styles.menu}>
      <View>
        <Text style={styles.heading}>Menu</Text>
      </View>
      <ScrollView style={styles.menuContainer}>
        {menu.map((subMenu, i) => (
          <SubMenu
            key={i}
            menu={subMenu}
            selected={selected}
            ruleMismatch={ruleMismatch}
            onClick={onSelect}
            index={i}
          />
        ))}
      </ScrollView>
      <Button
        onPress={() => {}}
        disabled={menu.length !== flattenedSelected.length}>
        Order
      </Button>
    </View>
  );
};

export default Menu;
