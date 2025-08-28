import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AgendamentoScreen() {
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [hora, setHora] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const navigation = useNavigation();

  const handleCepChange = async (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    setCep(cleaned);

    if (cleaned.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleaned}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setBairro(data.bairro || '');
          setLogradouro(data.logradouro || '');
        } else {
          setBairro('');
          setLogradouro('');
          Alert.alert('CEP inválido', 'Não encontramos esse CEP.');
        }
      } catch (error) {
        setBairro('');
        setLogradouro('');
        Alert.alert('Erro', 'Falha ao buscar o CEP.');
      }
    } else {
      setBairro('');
      setLogradouro('');
    }
  };

  const handleSubmit = () => {
    // Aqui você pode validar e enviar os dados
    navigation.navigate('pagamento' as never); // Redireciona para a tela "Pagamento"
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      if (mode === 'time') {
        setHora(
          `${String(selectedDate.getHours()).padStart(2, '0')}:${String(selectedDate.getMinutes()).padStart(2, '0')}`
        );
      }
    }
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Agendamento de Pick-up</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={handleCepChange}
          keyboardType="numeric"
          maxLength={8}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={bairro}
          editable={false}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          value={logradouro}
          editable={false}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone para Contato"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          maxLength={15}
          placeholderTextColor="#888"
        />

          <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={onChange}
            minimumDate={mode === 'date' ? new Date() : undefined}
            is24Hour={true}
            locale="pt-BR"
            // style should make it more similar to the other inputs
            accentColor='#21a1f1'
            design='material'
            style={{ marginBottom: 15, width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, justifyContent: 'center', backgroundColor: '#fff' }}
          />

                    <DateTimePicker
            value={date}
            mode={'time'}
            display="default"
            onChange={onChange}
            minimumDate={mode === 'date' ? new Date() : undefined}
            is24Hour={true}
            locale="pt-BR"
            accentColor='#21a1f1'
            design="material"
            style={{ marginBottom: 15, width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, justifyContent: 'center', backgroundColor: '#fff' }}
          />

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Observações Adicionais"
          value={observacoes}
          onChangeText={setObservacoes}
          multiline
          numberOfLines={4}
          placeholderTextColor="#888"
        />
        <Button title="Agendar Pick-up" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Quicksand',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Quicksand',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Quicksand',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#21a1f1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Quicksand',
  },
});