import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Calculadora() {
  return (
    <View style={styles.areatotal}>

      <View style={styles.areacalculo}>
        
        <View style={styles.areahistorico}>
          <Text> Histórico </Text>
        </View>
        <View style={styles.areaexpressao}>
          <Text> Expressão </Text>
        </View>

      </View>

      <View style={styles.areateclas}>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arealinha}>
          <TouchableOpacity style={styles.areabotao}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.areabotao}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  areatotal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areacalculo: {
    flex: 2,
    borderWidth: 1,
  },
  areahistorico: {
    flex: 2,
    borderWidth: 1,
  },
  areaexpressao: {
    flex: 1,
    borderWidth: 1,
  },
  areateclas: {
    flex: 3,
    borderWidth: 1,
    justifyContent: 'space-evenly',
  },
  arealinha:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
    flexWrap: 'no-wrap',
    
  },
  areabotao: {
    borderWidth: 1,
    backgroundColor: 'blue',
    padding: 40,
  },
});