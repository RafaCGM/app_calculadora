import { StyleSheet, Text, View } from 'react-native';

export default function CalculadoraCientifica() {
    return (
        <View style={estilos.telaTotal}>
            <Text style={estilos.title}> Em construção </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    telaTotal: {
        flex: 1,
        backgroundColor: '#232946',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        color: 'white',
        fontSize: 16,
    }
});