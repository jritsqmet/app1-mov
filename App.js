import { StatusBar } from 'expo-status-bar';
import { Image,Alert, Button, StyleSheet, Text, TextInput,  TouchableOpacity, View } from 'react-native';

export default function App() {
  function mensaje(){
    Alert.alert("Advertencia","Usuario incorrecto")
    console.log("Advertencia","Usuario incorrecto")
  }


  return (
    <View style={styles.container}>

      <Image 
        style={styles.img}
        source={require('./assets/androide.png')} 
      />

      <Text style= {styles.txt1}> Ventana de Login</Text>
      <Text style={styles.txt2} >Nick</Text>

      <TextInput style={styles.input1} 

        placeholder='ingrese el nick'  
        keyboardType="email-address"
      />

      <Text style={styles.txt2}> Contraseña {'\n'}</Text>
   
      <TextInput style={styles.input1}
        placeholder='ingrese la contraseña'
      />

      <Text style={styles.txt2}> Celular</Text>
      <TextInput style={styles.input2}
        placeholder='Ingrese celular'
        keyboardType="numeric"
      />

      <Button 
        title='Enviar'
        onPress={ mensaje}
        style={styles.btn1}
      />

      <TouchableOpacity style={styles.btn1}  onPress={mensaje} >
        <Text style={{fontSize:25, color: "#e40505"}}> Aceptar</Text>
        <Image  style={styles.img2}
        source={require("./assets/androide.png")}/>

      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#275769",
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1:{
    color:'white',
    fontSize:30
  },
  input1:{
    backgroundColor:'white',
    paddingHorizontal:30,
    width:'90%',
    height: '10%',
    borderRadius: 39
  },
  txt2:{
    fontSize:20,
    alignSelf:'flex-start',
    paddingHorizontal: 28
  },
  input2:{
    backgroundColor:'white',
    paddingHorizontal:30,
    width:'90%',
    height: '10%',
    borderRadius: 39
  },

  btn1:{
    backgroundColor:"#dddeda",
    top:10,
    width:"60%",
    height: "7%",
    borderRadius: 20
  },

  img:{
    width:"8%",
    height:"5%"
  },
  img2:{
    width:"20%",
    height:"70%",
    left:120,
    top:-30

  
  }
  



});
