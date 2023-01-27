import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const Paciente = ({item, pacienteEditar, pacienteEliminar, setModalPaciente, setPaciente}) => {

    const { paciente, fecha, id } = item
    
    const formatearFeach = fecha => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return nuevaFecha.toLocaleDateString('es-Es', opciones)
    }

    const handleInformacionPaciente = () => {
        setModalPaciente(true)
        setPaciente(item)
    }

    return (
        <Pressable onLongPress={handleInformacionPaciente}>
            <View style={styles.contenedor}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{paciente}</Text>
                <Text style={styles.fecha}>{formatearFeach(fecha)}</Text>

                <View style={styles.contenedorBotones}>
                    <Pressable style={[styles.btn, styles.btnEditar]}>
                        <Text 
                            style={styles.btnTexto} onPress={ () => pacienteEditar(id)}>Editar
                        </Text>
                    </Pressable>

                    <Pressable style={[styles.btn, styles.btnEliminar]}>
                        <Text style={styles.btnTexto} onPress= { () => pacienteEliminar(id)}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  contenedor: {
      backgroundColor: '#FFF',
      padding: 20,
      borderBottomColor: '#94A3B8',
      borderBottomWidth: 1
  },
  label: {
      color: '#374151',
      textTransform: 'uppercase',
      fontWeight: '700',
      marginBottom: 10
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  fecha: {
    color: '#374151'
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  btn :{
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  btnEditar: {
    backgroundColor: '#F59E0B'
  },
  btnEliminar: {
    backgroundColor: '#EF4444'
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF'
  }
})

export default Paciente