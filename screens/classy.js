import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';



const classy = ({navigation}) =>{
    return(
    <Animatable.View 
    animation="fadeInUpBig"
    style={{flex:1,alignItems:'center',justifyContent:'space-evenly'}}> 
      <Text style={{color:'#3B5998',fontFamily:'open sans', fontSize: 40,fontWeight: 'bold'}}> Class diagram</Text>
       
     

    </Animatable.View>

    
  );
  
  };

 
 
  export default classy;
  