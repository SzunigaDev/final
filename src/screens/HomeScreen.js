import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../styles/colors'; 
import { Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} 
				style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Bienvenido a mi Calculadora!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora')}
      >
        <Text style={styles.buttonText}>Ir a la Calculadora</Text>
      </Pressable>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.light, 
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: colors.dark,
    fontWeight: 'bold',
  },
	logo: {
    width: 400,
    height: 300,
  },
});

export default HomeScreen;
