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
  FlatList
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ pacientes, setPacientes ] = useState([])
  console.log(pacientes)
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
            renderItem={ ({item}) => <Paciente item={item}/> }
          />
      }

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />  
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
