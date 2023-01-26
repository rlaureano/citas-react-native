import { useState } from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible}) => {

    const [ paciente, setPaciente ] = useState('')
    const [ propietario, setPropietario ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ fecha, setFecha ] = useState(new Date())
    const [ sintomas, setSintomas ] = useState('')

  return (
    <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <SafeAreaView style={styles.contenido}>  
            <ScrollView>
                <Text style={styles.titulo}>Nueva {''}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del paciente</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Nombre del paciente' 
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText={setPaciente}
                    />
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del propietario</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Nombre propietario' 
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText={setPropietario}
                    />
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Email del propietario</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Email del propietario' 
                        placeholderTextColor={'#666'} 
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono del propietario</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Teléfono  del propietario' 
                        placeholderTextColor={'#666'} 
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha alta</Text>
                    <View style={styles.fechaContenedor}>
                        <DatePicker date={fecha}/>
                    </View>
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas</Text>
                    <TextInput 
                        style={[styles.input, styles.sintomasInput]} 
                        placeholder='Síntomas' 
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
      </Modal>
  )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
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
    campo: {
        marginTop: 10,
        marginHorizontal: 30
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },  
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    sintomasInput: {
        height: 100
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
    }
})
export default Formulario