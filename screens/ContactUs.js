import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import LinearGradient from 'react-native-linear-gradient';

const one =
'Java, C++ and C# source code files.'
  const two =
  'Yes, you can upload such files but in that case the accuracy of output will be compromised.'
  const three =
  'So far, SoftArc cannot scan files that contain nested classes. It is unable to distingush between scope of class variables and methods.'
  const four =
  'So far, SoftArc does not support the sharing of results. This feature will be available very soon'
const CONTENT = [
  {
    title: 'What kind of files I can scan with SoftArc?' ,
    content: one,
    
  },
  {
    title: 'Can I upload and scan source code files that involve syntax or logical errors?',
    content: two,
  },
  {
    title: 'What are the limitations of SoftArc?',
    content: three,
  },
  
  {
    title: 'Can I share results retrieved after scanning files?',
    content: four
  },
];



export default class App extends Component {
  state = {
    activeSections: [],
  };
  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
       
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Frequenlty Asked Question</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>


       {/*} <View style={styles.buttonw}>
            <TouchableOpacity onPress={()=>navigation.navigate('video')}>
                <LinearGradient
                    colors={['#3B5998', '#3B5998']}
                    style={styles.signInw}
                >
                    <Text style={styles.textSignw}>Watch a Tutorial</Text>
                   
                </LinearGradient>
            </TouchableOpacity>
    </View>*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 55,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'white',
  },
  
  buttonw: {
    alignItems: 'center',
   marginBottom:100,
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
  
  
 
})