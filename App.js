import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/screens/Counter';

export default function App() {
  return (
    <Counter />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})