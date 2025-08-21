import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import BubbleBackground from '../components/BubbleBackground';
import DonaMaria from '../assets/images/dona-maria.png'
// Atualize o caminho abaixo se o arquivo de estilos estiver em outro local ou nome
import styles from '../styles/home';
type RootStackParamList = {
  home: undefined;
  agendamento: undefined;
  pagamento: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
