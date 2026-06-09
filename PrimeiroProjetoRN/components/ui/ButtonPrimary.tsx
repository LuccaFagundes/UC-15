import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

// Tipagem das props do botão
type ButtonPrimaryProps = {
  title: string;

  // Função executada ao clicar no botão
  onPress: (event: GestureResponderEvent) => void;
};

export default function ButtonPrimary({
  title,
  onPress,
}: ButtonPrimaryProps) {
  return (
    // TouchableOpacity cria um botão clicável
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#741e9c',
    padding: 14,
    borderRadius: 35,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});