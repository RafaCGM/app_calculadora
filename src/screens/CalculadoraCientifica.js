import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function CalculadoraCientifica() {
    return (
        <View style={estilos.telaTotal}>
            <View style={estilos.areaDisplay}>
                <Text style={estilos.textoExpressao}>Expressão</Text>
                <Text style={estilos.textoResultado}>Resultado</Text>
            </View>
            <ScrollView style={estilos.areaTeclas}>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>sin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>cos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>tan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>π</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>ln</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>log</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>√</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>^</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.textoBotao}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoOperador]}>
                        <Text style={estilos.textoBotao}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.linhaTeclas}>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoFuncao]}>
                        <Text style={estilos.textoBotao}>DEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.botaoIgual]}>
                        <Text style={estilos.textoBotao}>=</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    areaDisplay: {
        width: '95%',
        backgroundColor: '#4a4e69',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        elevation: 4,
        minHeight: 120,
        justifyContent: 'flex-end',
    },
    textoExpressao: {
        color: '#f2e9e4',
        fontSize: 28,
        textAlign: 'right',
        marginBottom: 8,
    },
    textoResultado: {
        color: '#9a8c98',
        fontSize: 22,
        textAlign: 'right',
    },
    areaTeclas: {
        width: '95%',
        backgroundColor: '#22223b',
        borderRadius: 16,
        padding: 12,
        elevation: 2,
        maxHeight: 420,
    },
    linhaTeclas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    botao: {
        flex: 1,
        margin: 6,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#f2e9e4',
        elevation: 2,
    },
    botaoOperador: {
        backgroundColor: '#9a8c98',
    },
    botaoFuncao: {
        backgroundColor: '#bfc0c0',
    },
    botaoIgual: {
        backgroundColor: '#c9ada7',
        flex: 2,
    },
    textoBotao: {
        fontSize: 22,
        color: '#232946',
        fontWeight: 'bold',
    }
});