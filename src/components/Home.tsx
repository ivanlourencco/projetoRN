import {Text, View, Button, StyleSheet, Image} from 'react-native';

let img = require('../../assets/images/youare.png');

export function Home({navigation}) {
  return (
    <View style={styles.view1}>
      <Image style={styles.img1} source={img} />

      <Text style={styles.text1}>Oi, eu sou a Home</Text>

      <View>
        <Text style={styles.text2}>Testando mais uma na HOME</Text>
      </View>

      <Button
        style={styles.buttonn}
        title="Ir para Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
    fontWeight: '500',
  },
  buttonn: {
    fontSize: 20,
  },
  img1: {
    height: 280,
    width: 400,
  },
});
