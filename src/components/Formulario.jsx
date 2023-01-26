import { useState } from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes}) => {

    const [ paciente, setPaciente ] = useState('')
    const [ propietario, setPropietario ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ fecha, setFecha ] = useState(new Date())
    const [ sintomas, setSintomas ] = useState('')

    const handleCita = () => {

        if([paciente, propietario, email, telefono, sintomas].includes('')) {
            
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios'
            )

            return
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        setPacientes([...pacientes, {...nuevoPaciente}])

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('') 
        setFecha(new Date())
        setSintomas('')

        setModalVisible(false)
    }

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

                <Pressable style={styles.btnCancelar} onLongPress={ () => setModalVisible(false)}>
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>
                
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
                        <DatePicker date={fecha} onDateChange={ date => setFecha(date)} locale='es'/>
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

                <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
                    <Text style={styles.btnNuevaCitaTexto}>Agregar Cita</Text>
                </Pressable>

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
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },  
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
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
        borderRadius: 10
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 16
    }
})
export default Formulario