import React from 'react';
import {View,Text, SafeAreaView, Button,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Avatar, Title, Caption,TouchableRipple,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = ({navigation}) =>{
    return(

<SafeAreaView style= {styles.container}>
<View style={styles.userInfoSection}>
<View style={{flexDirection:'row', marginTop:15}}>
<Avatar.Image
source={{
  uri:'https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-user-sign-icon-person-symbol-human-avatar-.jpg',
}}
size={80}
/>
<View style={{marginLeft: 20}}>
<Title style={[styles.title, {
marginBottom: 5,
marginTop:15,
}]}>
  Ben Dunk
</Title>
<Caption style={styles.caption}>@CUI CUI CUI</Caption> 
</View>
</View>
</View>
<View style={styles.userInfoSection}>
 
  <View style={styles.row}>
    <Icon name="account-outline" color="black" size={40}/>
    <Text style={{color:"#777777", marginLeft: 20, marginTop:10, }}>Ben</Text>
  </View>
  <View style={styles.row}>
    <Icon name="account" color="black" size={40}/>
    <Text style={{color:"#777777", marginLeft: 20, marginTop:10,}}>Dunk</Text>
  </View>
  <View style={styles.row}>
    <Icon name="email" color="black" size={40}/>
    <Text style={{color:"#777777", marginLeft: 20, marginTop:10,}}>abc@gmail.com</Text>
  </View>
  <View style={styles.row}>
    <Icon name="face-outline" color="black" size={40}/>
    <Text style={{color:"#777777", marginLeft: 20, marginTop:10,}}>Ben19</Text>
  </View>
  <View style={styles.row}>
    <Icon name="account-details" color="black" size={40} />
    <Text style={{color:"#777777", marginLeft: 20, marginTop:10,}}>Final Year software engineering student...</Text>
  </View>

</View>
</SafeAreaView>
  );
  };
  export default ProfileScreen;

  const styles = StyleSheet.create({
  container:{
      flex:1,
   
  },

userInfoSection:{
paddingHorizontal: 30,
marginBottom: 25,
},

title: {
fontSize: 24,
fontWeight: 'bold',
},

caption:{
fontSize: 14,
lineHeight: 14,
fontWeight: '500',
},

row: {
flexDirection: 'row',
marginBottom: 10,
},

infoBoxWrapper: {
borderBottomColor: '#dddddd',
borderBottomWidth: 1,
borderTopColor: '#dddddd',
borderTopWidth: 1,
flexDirection: 'row',
height: 100,
},

infoBox:{
width: '50%',
alignItems: 'center',
justifyContent: 'center',

},

menuWrapper: {
  marginTop: 10,
},

menuItem: {
  flexDirection: 'row',
  paddingVertical: 15,
  paddingHorizontal: 30,
},

menuItemText: {
  color: '#777777',
  marginLeft:20,
  fontWeight: '600',
  fontSize: 16,
  lineHeight:26,
},

  });