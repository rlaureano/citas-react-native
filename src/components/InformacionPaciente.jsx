import React from 'react'
import { SafeAreaView, Text, View, Pressable, StyleSheet } from 'react-native'

const InformacionPaciente = ({paciente, setModalPaciente}) => {

    console.log(paciente)

    return (
        <SafeAreaView style={styles.contenedor}>
            
            <Text style={styles.titulo}>Informacion {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>

            <View>
                <Pressable style={styles.btnCerrar} onPress={ () => setModalPaciente(false)}>
                    <Text style={styles.btnCerrarTexto}>Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>
                <Text>{paciente?.paciente}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F59E0B',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'
    },
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },  
    btnCerrarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    contenido: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        height: 300
    }
})

export default InformacionPaciente