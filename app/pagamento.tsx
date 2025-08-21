import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const metodos = [
  {
    id: 'pix',
    nome: 'PIX',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968778.png',
  },
  {
    id: 'cartao',
    nome: 'Cartão de Crédito',
    icon: 'https://cdn-icons-png.flaticon.com/512/633/633611.png',
  },
  {
    id: 'dinheiro',
    nome: 'Dinheiro',
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041870.png',
  },
];

export default function PagamentoScreen() {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const navigation = useNavigation();

  const handleConfirmar = () => {
    if (selecionado) {
      const metodoSelecionado = metodos.find(m => m.id === selecionado);
      if (metodoSelecionado) {
        alert(`Pagamento via ${metodoSelecionado.nome} confirmado!`);
      } else {
        alert('Método de pagamento não encontrado.');
      }
    } else {
      alert('Selecione um método de pagamento.');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
  <Text style={styles.backButtonText}>◀ Voltar</Text>
</TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titulo}>Escolha o método de pagamento:</Text>
        {metodos.map(metodo => (
          <TouchableOpacity
            key={metodo.id}
            style={[
              styles.button,
              selecionado === metodo.id && styles.buttonSelected,
            ]}
            onPress={() => setSelecionado(metodo.id)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: metodo.icon }} style={styles.icon} />
            <Text style={styles.buttonText}>{metodo.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.confirmar}
        onPress={handleConfirmar}
        activeOpacity={0.85}
      >
        <Text style={styles.confirmarText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 20,
    padding: 24,
    alignItems: 'center',
    gap: 15,
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#333',
    alignSelf: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#d16ba5',
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  buttonSelected: {
    backgroundColor: '#d16ba5',
    borderColor: '#a64d79',
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 10,
    resizeMode: 'contain',
  },
  confirmar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#61dafb',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    maxWidth: 400,
    alignSelf: 'center',
  },
  confirmarText: {
    color: '#fff',
    fontSize: 20,
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