
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  SectionList,
  Text,
  View,
  Image
} from 'react-native';

 class ContactItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         contact: props.contact 
    //     }
    // }
    
    render(){
    
      let firstname = this.props.dataItem.firstname ; 
      let lastname = this.props.dataItem.lastname ; 
      let email = this.props.dataItem.email ; 
      let prefix = this.props.dataItem.prefix ;
      let telephone = this.props.dataItem.phone ; 

      let picLec = 'http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/'+ firstname.toLowerCase()+'.jpeg' ;
      return(
            <View style={styles.row}>
                 <Image source={{uri: picLec}}
                  style={styles.picture} />
                  <View>
                   <Text>{prefix+""+firstname+"  "+lastname}</Text>
                  <Text>{"tel : "+telephone+" "}</Text>
                  <Text>{email}</Text>  
                  </View>
          </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      paddingTop : 20
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
      flexDirection: 'row'
    },
    header: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'steelblue',
      color: 'white',
      fontWeight: 'bold',
    },
     picture: {
    height:50,
    width: 50,
    resizeMode: 'contain',
    marginRight :  20,  
  }
  }) ;

  export default ContactItem ;