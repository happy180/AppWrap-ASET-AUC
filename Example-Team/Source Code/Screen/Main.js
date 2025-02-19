import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button,ImageBackground,TouchableOpacity,Image } from 'react-native';
import AudioComp from '../Helper/Audo'
import Ap from '../assets/Ap.png'
import LogicGate from '../assets/logicGate.png'
const Main=({ navigation })=> {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={styles.image}>
      <Text style={styles.textHeading}>TRAP</Text>
      <View style={styles.GameOptions}>
        {/* <Text style={{fontSize:20}}>test</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('learnMaths')}
      >
      <Image
      style={{height:150,width:150}}
        source={Ap}
       />
        <Text style={{marginTop:15,color:"#fff"}}>Learn Maths</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
      <Image
      style={{height:150,width:150,marginTop:15}}
        source={LogicGate}
       />
        <Text style={{marginTop:15,color:"#fff"}}>Learn Logic Gate</Text>
      </TouchableOpacity>
      </View>
      {/* <Button title="Play Sound" onPress={AudioComp} /> */}
      </ImageBackground>
      <StatusBar style="dark" backgroundColor="#129cf3"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  textHeading: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:70,
    textAlign: 'center',
  },
  GameOptions:{
    marginTop:100,
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#eae7a2",
    padding: 10,
    paddingLeft:40,
    paddingRight:40
  },
});
export default Main