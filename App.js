/* eslint-disable default-case */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imagens/jokenpo.png')} />
      </View>
    );
  }
}

class Icone extends Component {
  render() {
    if (this.props.escolha === 'Pedra') {
      return (
        <View style={styles.cxIcones}>
          <Text style={styles.txtPropsIcones}>{this.props.jogador}</Text>
          <Image source={require('./imagens/pedra.png')} />
        </View>
      );
    } else if (this.props.escolha === 'Papel') {
      return (
        <View style={styles.cxIcones}>
          <Text style={styles.txtPropsIcones}>{this.props.jogador}</Text>
          <Image source={require('./imagens/papel.png')} />
        </View>
      );
    } else if (this.props.escolha === 'Tesoura') {
      return (
        <View style={styles.cxIcones}>
          <Text style={styles.txtPropsIcones}>{this.props.jogador}</Text>
          <Image source={require('./imagens/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

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
        result = 'Empate!!';
      }
      if (item === 'Papel') {
        result = 'Você GANHOU!';
      }
      if (item === 'Tesoura') {
        result = 'Computador GANHOU!';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (item === 'Pedra') {
        result = 'Computador GANHOU!';
      }
      if (item === 'Papel') {
        result = 'Empate!!';
      }
      if (item === 'Tesoura') {
        result = 'Você GANHOU!';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (item === 'Pedra') {
        result = 'Você GANHOU!';
      }
      if (item === 'Papel') {
        result = 'Computador GANHOU!';
      }
      if (item === 'Tesoura') {
        result = 'Empate!!';
      }
    }

    this.setState({ usuario: item, computador: escolhaComputador, resultado: result });
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <View style={styles.cxBotoes}>
          <View style={styles.cxBtnEncolha}>
            <TouchableOpacity style={styles.btnEscolha} onPress={() => { this.escolha('Pedra') }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Pedra</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cxBtnEncolha}>
            <TouchableOpacity style={styles.btnEscolha} onPress={() => { this.escolha('Papel') }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Papel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cxBtnEncolha}>
            <TouchableOpacity style={styles.btnEscolha} onPress={() => { this.escolha('Tesoura') }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Tesoura</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.conteudoTxt}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.usuario} jogador='Você' />
          <Icone escolha={this.state.computador} jogador='Computador' />
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
  texto: {
    fontSize: 16
  },
  cxBotoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cxBtnEncolha: {
    width: 100,
    marginTop: 10
  },
  btnEscolha: {
    backgroundColor: '#ffa500',
    padding: 10,
    alignItems: 'center',
  },
  conteudoTxt: {
    margin: 10,
    alignItems: 'center',
  },
  txtResultado: {
    color: 'green',
    fontSize: 25,
    height: 60,
    marginTop: 20
  },
  cxIcones: {
    alignItems: 'center',
    margin: 20
  },
  txtPropsIcones: {
    textAlign: 'center',
    fontSize: 21
  }
});
