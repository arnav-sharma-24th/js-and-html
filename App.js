import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export class RedButton extends Component{
render(){
return(
<Button title="me 🤠"  color="red"></Button>
)
}
}
export default class App extends Component {
  render() {
    return (
    <View style={{marginTop:400,width:"50%"}}>
      <RedButton/>
    
        <Text style={{marginTop:50}}>My first App</Text>
        </View>
    );
  }
}
