import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculadora() {
  return (
    <View style={styles.areatotal}>

      <View style={styles.areacalculo}>
        <View style={styles.areahistorico}>
          <Text style={styles.historicoTexto}>Histórico</Text>
        </View>
        <View style={styles.areaexpressao}>
          <Text style={styles.expressaoTexto}>Expressão</Text>
        </View>
      </View>

      <View style={styles.areateclas}>
        <View style={styles.arealinha}>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text style={styles.textoBotao}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoOperador]}>
            <Text style={styles.textoBotao}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.areabotao, styles.areabotaoIgual]}>
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