import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { textStyles, numberStyles } from '../styles/typography';
import { colors } from '../styles/colors';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      if (displayValue === '0' && value !== '0') {
        setDisplayValue(value.toString());
      } else {
        setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {[7, 8, 9, '/'].map((item) => (
            <Pressable
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6, '*'].map((item) => (
            <Pressable
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {[1, 2, 3, '-'].map((item) => (
            <Pressable
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {['C', 0, '=', '+'].map((item) => (
            <Pressable
              key={item}
              style={[styles.button, item === 'C' && { backgroundColor: colors.accent }]}
              onPress={() => handlePress(item)}
            >
              <Text style={[styles.buttonText, item === 'C' && { color: colors.dark }]}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  displayContainer: {
    backgroundColor: colors.dark, 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: 220,
    minWidth: 220,
  },
  displayText: {
    ...textStyles,
    ...numberStyles,
    color: colors.light,
    textAlign: 'right',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    ...textStyles,
    color: colors.dark,
  },
});

export default CalculatorScreen;
