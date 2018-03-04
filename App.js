


import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
} from 'react-native';
import contactData from './contactData' ; 
import ContactItem from './contactItem' ; 

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = { data:[] };

      contactData.fetchContacts()
        .then(contacts => {this.setState({data : contacts} );  })
        .catch(err => {console.log(err)}) ;

    // this.state = {  
    // data:[
    //     {firstname:'Leo',religion:'Muslim',lastname:'Wasalam' },
    //     {firstname:'Weo',religion:'Buddist',lastname:'SawatDe' },
    //     {firstname:'Neo',religion:'Christian',lastname:'ShakeSon' }]
    //   ]};

  }

  
  _renderContact = ({item})=>{
    console.log(item);
    return(
      <ContactItem dataItem={item}/>
    );
  }

  render() {
    return(
      <View>
        <Container>
      <FlatList
          data = {this.state.data}
          renderItem={this._renderContact}/>
        </Container>
     </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  row:{
    flexDirection:'row',
    borderWidth :2,
    flex:1,
    borderColor: 'steelblue',
    marginBottom : 2,
  },

  picture: {
    height:50,
    width: 50,
    resizeMode: 'contain',
  }
});
