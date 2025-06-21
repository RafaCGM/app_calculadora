import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';


let estados = {
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false
}

export default function Calculadora() {

  const [vlrDisplay, setVlrDisplay] = useState(estados.valorTela);
  const [vlrRes, setVlrRes] = useState(estados.resultado);


  const addDigito = (digito) => {
    if(digito == '+' || digito == '-' || digito == '/' || digito == '*'){
      estados.ponto = false
    }

    if(digito == '.' && !estados.ponto){
      estados.ponto = true
      estados.operado = false
    }else if(digito == '.' && estados.ponto){
      return
    }

    if((digito == '+' || digito == '-' || digito == '/' || digito == '*') && estados.operado){
      estados.valorTela = estados.resultado
      estados.resultado = estados.valorTela
    }

    estados.valorTela = estados.valorTela + digito
    setVlrDisplay(estados.valorTela)
    setVlrRes(estados.resultado)
    estados.operado = false
  }
  // AC
  const limparTela = () => {
    estados = {
    valorTela:'',
    resultado:0,
    operado:false,
    ponto:false
    }
    setVlrDisplay(estados.valorTela)
    setVlrRes(estados.resultado)
  }
  // AC | DEL | RESULTADO(=)
  const operacao = (tecla) => {
    if(tecla==' AC '){
      limparTela()
      return
    }
    if(tecla==' DEL '){
      estados.valorTela = vlrDisplay.substring(0,(vlrDisplay.length-1))
      setVlrDisplay(estados.valorTela)
      return
    }
    if(tecla == '='){
      estados.resultado = eval(estados.valorTela)
      estados.operado = true
      setVlrRes(estados.resultado)
    }
  }

  return (
    <View style={styles.areatotal}>
      <View style={styles.areacalculo}>
        <View style={styles.areahistorico}>
          <Text style={styles.historicoTexto}>{vlrRes}</Text>
        </View>
        <View style={styles.areaexpressao}>
          <Text style={styles.expressaoTexto}> {vlrDisplay}</Text>

        </View>
      </View>
    
      <View style={styles.areateclas}>
        <View style={styles.arealinha}>
          <TouchableOpacity onPress={() => {operacao(' AC ')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}> AC </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operacao(' DEL ')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}> DEL </Text>
          </TouchableOpacity>

          {/* alterar essa daqui ⬇️⬇️⬇️  */}
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {addDigito('/')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity onPress={() => {addDigito('7')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('8')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('9')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('*')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity onPress={() => {addDigito('4')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('5')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('6')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('-')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity onPress={() => {addDigito('1')}} style={styles.areabotao}>
            <Text  style={styles.textoBotao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('2')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('3')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('+')}} style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity onPress={() => {addDigito('0')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {addDigito('.')}} style={styles.areabotao}>
            <Text style={styles.textoBotao}>.</Text>
          </TouchableOpacity>

          {/* alterar essa daqui ⬇️⬇️⬇️  */}
          <TouchableOpacity  style={[styles.areabotao, styles.areabotaoOperador]}> 
            <Text style={styles.textoBotao}>+/-</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {operacao('=')}} style={[styles.areabotao, styles.areabotaoIgual]}>
            <Text style={styles.textoBotao}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  areatotal: {
    flex: 1,
    backgroundColor: '#232946',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  areacalculo: {
    width: '95%',
    backgroundColor: '#4a4e69',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },
  areahistorico: {
    minHeight: 30,
    marginBottom: 8,
    paddingHorizontal: 8,
    justifyContent: 'flex-end',
  },
  areaexpressao: {
    minHeight: 40,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  historicoTexto: {
    color: '#bfc0c0',
    fontSize: 14,
    textAlign: 'right',
  },
  expressaoTexto: {
    color: '#f2e9e4',
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 8,
  },
  areateclas: {
    width: '95%',
    backgroundColor: '#22223b',
    borderRadius: 16,
    padding: 12,
    elevation: 2,
  },
  arealinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  areabotao: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f2e9e4',
    elevation: 2,
    
  },
  areabotaoOperador: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  areabotaoIgual: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  textoBotao: {
    fontSize: 24,
    color: 'rgb(27, 8, 109)',
    fontWeight: 'bold',
  },
});