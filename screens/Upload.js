import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const button = ({navigation}) =>{
  
  async function openDocumentFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, 
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const [selectedValue, setSelectedValue] = useState("java");
  
  return(
  <View style={styles.container}> 

  {/* picker*/ }
  <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item color='red' label="Java" value="java" />
        <Picker.Item  label="c++" value="Cplus" />
        <Picker.Item  label="C#" value="c#" />
      </Picker>

              {/* FIles Select Button */}
  <View style={styles.button}>
            <TouchableOpacity onPress={()=>openDocumentFile()}>
                <LinearGradient
                    colors={['#3B5998', '#3B5998']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Select Your Files Here</Text>
                    
                </LinearGradient>
                
            </TouchableOpacity>
            </View>

            


             
                         {/* submit button*/ }
            <View style={styles.buttonw}>
            <TouchableOpacity onPress={()=>navigation.navigate('button')}>
                <LinearGradient
                    colors={['#3B5998', '#3B5998']}
                    style={styles.signInw}
                >
                    <Text style={styles.textSignw}>Submit</Text>
                   
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
picker:{
width:100,
height:20,
borderWidth:1,
borderColor:'black',
backgroundColor:'black',
color:'black',
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
 marginTop:10,
},
signInw: {
  width: 180,
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