import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import BubbleBackground from '../components/BubbleBackground';
import DonaMaria from '../assets/images/dona-maria.png'
// Atualize o caminho abaixo se o arquivo de estilos estiver em outro local ou nome
import styles from '../styles/home';
import { useFonts } from 'expo-font';

type RootStackParamList = {
  home: undefined;
  agendamento: undefined;
  pagamento: undefined;
  cadastro: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [fontsLoaded] = useFonts({
    'Quicksand': require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    // retorne um component de carregamento
    return <View style={styles.container}><Text>Carregando...</Text></View>;
  }
  
  return (
    <View style={styles.container}>
      <BubbleBackground />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        <Image
          source={DonaMaria}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Dona Maria</Text>
        <View style={styles.card}>
          <Text style={styles.title}>Bem-vindo à Lavanderia!</Text>
          <Text style={styles.subtitle}>Por favor, faça login para acessar nossos serviços.</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('agendamento')}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
                    <TouchableOpacity
            style={[styles.button, { backgroundColor: '#eee', marginTop: 10 }]}
            onPress={() => navigation.navigate('cadastro' as never)}
          >
            <Text style={[styles.buttonText, { color: '#21a1f1' }]}>Me cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
