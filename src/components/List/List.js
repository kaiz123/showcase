import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    "marginLeft": "25px"
  },
  bulletPoint: {
    width: 10,
    fontSize: 14,
  },
  itemContent: {
    flex: 1,
    fontSize: 14
  },
  knob: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8,
  }
});

const List = ({ children }) => children;

// export const Item = ({ children }) => (
//   <View style={styles.item}>
//     <Text style={styles.bulletPoint}>•</Text>
//     <Text style={styles.itemContent}>{children}</Text>
//   </View>
// );

export const Item  = ({ children }) => (
  <View>
  <View style={[styles.knob]}>
  </View>
  <View style={styles.item}>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
  </View>
);

List.propTypes = {
  children: PropTypes.node,
};

Item.propTypes = {
  children: PropTypes.node,
};

export default List;
