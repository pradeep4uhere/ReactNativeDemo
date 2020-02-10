import React, {Component} from 'react';
import Slideshow from 'react-native-image-slider-show';
import ReadMore from 'react-native-read-more-text';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item,   Label } from 'native-base';
import { CheckBox, Input } from 'react-native-elements';
export default class EventDetailsScreen extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          position: 2,
          interval: null,
          arrowSize:1,
          dataSource: [
            {
               url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Ghungroo_Delhi_Rudra_01.jpg',
            }, 
            {
              url: 'https://www.rudraxp.com/wp-content/uploads/2019/05/Day-tour-india_home_Rudra_ladakh.jpg',
            }, 
            {
              url: 'https://www.rudraxp.com/wp-content/uploads/2019/02/Mahak_rudraXp_H.jpg',
            },
          ],
        };
      }

    componentWillMount() {
    this.setState({
        interval: setInterval(() => {
        this.setState({
        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
             }, 2000)
    });
    }

    componentWillUnmount() {
    clearInterval(this.state.interval);
    }


  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: 'tomato', marginTop: 5, fontWeight:'bold'}} onPress={handlePress}>
            Read more...
      </Text>
    );
  }
 
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#000', marginTop: 5, fontWeight:'bold'}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 

 
  render() {  
      return (  
        <Container>
        <Header style={{backgroundColor:'#F72F81'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('Day Experiences')}>
            	<Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>Event Detail</Text>  
          </Body>
          <Right>
          
          <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />       
          </Right>
        </Header>
        <Body style={styles.drawerContainer}>
        <ScrollView style={styles.scrollView}>
        <View>
        <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
        </View>
        <View style={{justifyContent:'center', alignContent:'center', padding:15}}>
            <Text style={{fontSize:20}}>Ghungroo – Country’s only Dinner Theatre</Text>
            <Text>Dance Musical & Dinner Theatre</Text>
         <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              <Text style={styles.cardText}>
              “If there is one place on the face of earth where all the dreams of living men have found a home from the very earliest days when man began the dream of existence, it is India.”
            – Romain Rolland, Nobel Laureate
            A unique, immersive, dance musical, that unfolds the story of Delhi as a seat of power that impacted the cultural-scape of India, a perfect end to your day.
            Delhi or ‘Dehleez’, the doorway to India and the seat of many empires, has a past as glorious, varied and colourful as the nation it represents. So we follow Yamuna, the meandering river that has forever patronised this city, on a journey that is filled with enchanting tales of power, conquest, revenge, devotion and love.
            Starting from the first documented ruler of Delhi, Prithwi Raj Chauhan, tracing the journey of Bhakti Movement through Sufism, followed by stylised form of Kathak for the Mughal Courts, Tarana, ending in Bollywood, it showcases the history and spirit of Delhi, through dance, all in an hour’s time.
            This is followed by authentic Indian Barbecue dinner at Angare, that presents Indian gastronomy in its purest form, as we try to create an environment that unifies all your five senses for that ultimate experience.
            Traditional recipes. Researched over centuries. Tested in the Royal Kitchens. 
            Slow cooked, delicately spiced, with subtle aromas and served the way it was meant to be: Straight from fire.
            Join us on an extra ordinary narration of this saga of romance with the bygone era, a first and the only Boutique – Dinner Theater in Delhi, located in the heart of the city.
              </Text>
        </ReadMore>
        </View>
        

      </ScrollView>
          </Body>
        </Container>
      );  
  }  
}  



const styles = StyleSheet.create({

    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
        fontSize: 15,
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        margin:5
    }
});
 