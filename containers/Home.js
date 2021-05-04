import React, {Component} from 'react';
import {View, ImageBackground, LogBox} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import Congratulations from '../components/Congratulations';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      countLeft: 0,
      countRight: 0,
      visible: false,
    };
    LogBox.ignoreLogs(['componentWillReceiveProps']);
  }
  getLeftSwipe() {
    this.setState({countLeft: this.state.countLeft + 1});
  }

  getRightSwipe() {
    this.setState({countRight: this.state.countRight + 1});
  }

  swipeLeftCount = () => {
    this.swiper.swipeLeft();
  };

  swipeRightCount = () => {
    this.swiper.swipeRight();
  };

  showDialog = () => {
    console.log('show dialog');
    this.setState({visible: true});
  };

  continueSwiping = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}>
        <View style={styles.containerHome}>
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}>
            {Demo.map((item, index) => (
              <Card
                key={index}
                onSwipedLeft={this.getLeftSwipe.bind(this)}
                onSwipedRight={this.getRightSwipe.bind(this)}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  actions
                  onPressLeft={this.swipeLeftCount.bind(this)}
                  onPressRight={this.swipeRightCount.bind(this)}
                  showDialog={this.showDialog.bind(this)}
                />
              </Card>
            ))}
          </CardStack>
        </View>
        <View>
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({visible: false});
            }}>
            <DialogContent>
              <Congratulations
                countLeft={this.state.countLeft}
                countRight={this.state.countRight}
                matchedCount={0}
                continueSwiping={this.continueSwiping.bind(this)}
              />
            </DialogContent>
          </Dialog>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
