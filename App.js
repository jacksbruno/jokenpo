/* eslint-disable default-case */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      computador: '',
      resultado: ''
    };
  }

  escolha(item) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'Pedra';
      break;
      case 1: escolhaComputador = 'Papel';
      break;
      case 2: escolhaComputador = 'Tesoura';
      break;
    }

    let result = '';

    if (escolhaComputador === 'Pedra') {
      if (item === 'Pedra') {
        result = 'Empate';
      }
      if (item === 'Papel') {
        result = 'Usuário GANHOU!';
      } else {
        result = 'Computador GANHOU!';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (item === 'Pedra') {
        result = 'Computador GANHOU!';
      }
      if (item === 'Papel') {
        result = 'Empate';
      } else {
        result = 'Usuário GANHOU!';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (item === 'Pedra') {
        result = 'Usuário GANHOU!';
      }
      if (item === 'Papel') {
        result = 'Computador GANHOU!';
      } else {
        result = 'Empate';
      }
    }

    this.setState({ usuario: item, computador: escolhaComputador, resultado: result });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.conteudo}>
          <Text style={styles.texto}>Escolha do usuário: {this.state.usuario}</Text>
          <Text style={styles.texto}>Escolha do computador: {this.state.computador}</Text>
          <Text style={styles.texto}>Resultado: {this.state.resultado}</Text>
        </View>
        <View style={styles.botoes}>
          <Button title="Pedra" onPress={() => { this.escolha('Pedra') }} />
          <Button title="Papel" onPress={() => { this.escolha('Papel') }} />
          <Button title="Tesoura" onPress={() => { this.escolha('Tesoura') }} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('jokenpo', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 40
  },
  conteudo: {
    margin: 10,
  },
  texto: {
    fontSize: 16
  },
  botoes: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});
