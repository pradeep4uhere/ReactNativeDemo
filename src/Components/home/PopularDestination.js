import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight,Platform } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

export default class PopularDestination extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          position: 1,
          interval: null,
          dataSource: [
            {
              title: 'Pub Hopping',
              caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/1139X627/8bb3a774d2c43bccd0ca8825c944baca.jpeg',
            }, {
              title: 'Sham e Banaras',
              caption: 'A good laugh and a good sleep are the best cures in the doctor’s book.',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/cc5ef8902e9a7dd3d30b2af9cd2325ac.jpeg',
            }, {
              title: 'Sham e Dilli',
              caption: 'How did it get so late so soon?”',
              url: 'http://192.168.0.181/RudraProject/laravelapi/storage/app/public/event/resize/372X253/c4a614bd1c0ce77c2e0981d75e0a2293.jpeg',
            },
          ],
        };
      }
render() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 1,
          },
          scrollView: {
            backgroundColor: '#FFF',
            marginHorizontal: 1,
          },
          text: {
            fontSize: 20,
          },

        welcometext:{
            width: '90%',
            flexDirection: 'row',
            justifyContent: "center", 
            alignItems: "center",
            fontSize:18,
            color:'#FFF',
            fontWeight: 'bold',
            marginTop:110

        },
        text:{
          fontSize:18,
          color:'#FFF',
          fontFamily: 'Cochin',
          alignItems: "center",
          justifyContent: "center", 

        },
      });
return (
    <View style={{width: '100%', height:250}}>
    <Text style={styles.textTitle}>Popular Destination</Text>
    <View>
    <Text style={{width:'100%'}}>___________________
    <Image style={styles.textTitle} source={{uri: "http://192.168.0.181:5000/rudra/images/sep-title.png"}}  style={{
        width: 50, 
        height: 10,
        marginTop:20,
        }}/>
    ___________________
    </Text>
    </View>
    <View style={{marginTop:10,color:'#FFF'}}>
    <Slideshow style={{color:'#fff'}}
    dataSource={this.state.dataSource}
    position={this.state.position}
    onPositionChanged={position => this.setState({ position })} />
    </View>
    <View style={{marginTop:10}}>
      <Button block success onPress={() => this.props.navigation.navigate('EventList')}>
        <Text>View All</Text>
      </Button>
    </View>
    </View>
);
}
}
