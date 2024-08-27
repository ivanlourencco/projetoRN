import {Button, Text, View, StyleSheet, Image} from 'react-native';

const image = require('../../assets/images/youare.png');

export function Sobre({navigation}) {
  return (
    <View style={styles.view1}>
      <Image source={image} style={styles.img1} />
      <Text style={styles.text1}> Oi, eu sou a Sobre</Text>
      <View>
        <Text style={styles.text2}>
          Testando texto no SOBRE, garantia RVsoftware
        </Text>
      </View>
      <Button
        title="ir para Home"
        onPress={() => navigation.navigate('Home')}
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
  img1: {
    height: 280,
    width: 400,
  },
});
