/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})
  const [ modalPaciente, setModalPaciente ] = useState(false)

  const pacienteEditar = id => {
    setModalVisible(true)
    const pacienteEditar = pacientes.find( paciente => paciente?.id === id )
    setPaciente(pacienteEditar)
  }

  const pacienteEliminar = id => {
    
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar'},
        { text: 'Sí, eliminar', onPress: () => {
          const pacientesActualizado = pacientes.filter( paciente => paciente?.id !== id )
          setPacientes(pacientesActualizado)      
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}> Administrador de citas {' '}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable 
        onPress={ () => setModalVisible(true) }
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita} >Nueva cita</Text>
      </Pressable>

      {
        !pacientes?.length ? 
          <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={ item => item.id}
            renderItem={ ({item}) => 
              <Paciente item={item} pacienteEditar={pacienteEditar} 
                setModalVisible={setModalVisible} pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente} setPaciente={setPaciente}
              /> 
            }
          />
      }

      {
        modalVisible &&
        <Formulario 
          cerrarModal={cerrarModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        /> 
      } 

      <Modal
        visible={modalPaciente}
        animationType='fade'
      >
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        /> 
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;
