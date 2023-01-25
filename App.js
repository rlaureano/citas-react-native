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
} from 'react-native';
import Formulario from './src/components/Formulario';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)

  const nuevaCitaHandler = () => {
    console.log(true)
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
      <Formulario 
        modalVisible={modalVisible}
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
  }
});

export default App;
