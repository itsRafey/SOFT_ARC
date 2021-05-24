import React from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const button = ({navigation}) =>{
  
  return(
  <View style={styles.container}> 
  <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('table')}>
                <LinearGradient
                    colors={['#3B5998', '#3B5998']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Show the Table</Text>
                   
                </LinearGradient>
            </TouchableOpacity>
            </View>
            
            <View style={styles.buttonw}>
            <TouchableOpacity onPress={()=>navigation.navigate('classy')}>
                <LinearGradient
                    colors={['#3B5998', '#3B5998']}
                    style={styles.signInw}
                >
                    <Text style={styles.textSignw}>Show Class Diagram</Text>
                   
                </LinearGradient>
            </TouchableOpacity>
            </View>

  </View>

);
};
export default button;






const styles = StyleSheet.create({
container:{
    flex:1,
  alignItems:'center',
  justifyContent:'center'
},

title: {
  color: '#3B5998',
  fontSize: 26,
  fontWeight: 'bold'
 
  
},
button: {
  alignItems: 'flex-end',
 
},
signIn: {
  width: 250,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
textSign: {
  color: 'white',
  fontWeight: 'bold'
},
buttonw: {
  alignItems: 'flex-end',
 marginTop:30,
},
signInw: {
  width: 250,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
textSignw: {
  color: 'white',
  fontWeight: 'bold'
}
});