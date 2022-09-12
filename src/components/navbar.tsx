import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppTextBold } from './UI/appTextBold';

export const Navbar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
      }}
    >
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});
