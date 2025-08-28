import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  justifyContent: 'flex-start',
  maxWidth: 420, // Limita largura no web
  alignSelf: 'center', // Centraliza no web
},
  inner: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: width * 0.4,
    width: width * 0.7,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: width * 0.85,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 28,
    color: '#21a1f1',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Quicksand',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Quicksand',
  },
  form: {
    marginTop: 10,
    width: width * 0.85,
    alignItems: 'center',

  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#b3d8f7',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'Quicksand',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#61dafb',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Quicksand',
  },
});