import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

type OrDividerProps = {
  text?: string;
  showDot?: boolean;
};

export default function OrDivider({ text = 'Or', showDot = false }: OrDividerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        {showDot && <View style={styles.dot} />}
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.input.border,
    position: 'relative',
  },
  text: {
    paddingHorizontal: 10,
    color: Colors.text.light,
    fontSize: 14,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.input.border,
    position: 'absolute',
    top: -2.5,
    left: '40%',
  },
});