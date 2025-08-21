import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AgendamentoScreen() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

    // Defina RootStackParamList conforme sua navegação, exemplo abaixo:
    type RootStackParamList = {
      agendamento: undefined;
      pagamento: undefined;
      // adicione outras rotas conforme necessário
    };
    
        const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  

  const handleAgendar = () => {
    // Aqui você pode adicionar a lógica de agendamento
    navigation.navigate('pagamento');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
  <Text style={styles.backButtonText}>◀ Voltar</Text>
</TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.header}>Agendamento</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.form}
        >
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Data (ex: 20/08/2025)"
            value={data}
            onChangeText={setData}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Horário (ex: 14:00)"
            value={horario}
            onChangeText={setHorario}
            placeholderTextColor="#888"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button} onPress={handleAgendar}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: 24,
    marginBottom: 32,
    textAlign: 'center',
    color: '#4e3bc9',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginVertical: 10,
    padding: 14,
    width: '100%',
    maxWidth: 400,
    borderWidth: 1.5,
    borderColor: '#f4a9c6',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    left: width * 0.1,
    right: width * 0.1,
    bottom: 24 + 56, // 56px para garantir que fique acima do tab bar
    paddingVertical: 14,
    backgroundColor: '#61dafb',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  backButton: {
  position: 'absolute',
  top: 40,
  left: 20,
  zIndex: 10,
  padding: 8,
  backgroundColor: '#f4f4f4',
  borderRadius: 20,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
},
backButtonText: {
  color: '#21a1f1',
  fontSize: 16,
  fontWeight: 'bold',
},
});