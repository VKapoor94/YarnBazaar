import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles';

const Congratulations = ({
  countLeft,
  countRight,
  matchedCount,
  continueSwiping,
}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/bg2.png')}
        style={styles.bg}>
        <Text
          style={{
            fontSize: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
            color: '#ffffff',
          }}>
          Congratulations!!!
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 60}}>
          <TouchableHighlight style={[styles.profileImgContainer]}>
            <Image
              source={require('../assets/images/01.jpg')}
              style={styles.profileImg}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.profileImgContainer]}>
            <Image
              source={require('../assets/images/03.jpg')}
              style={styles.profileImg}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 70,
              color: '#ffffff',
            }}>
            Left Swiped count: {countLeft}
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 20,
              color: '#ffffff',
            }}>
            Right Swiped count: {countRight}
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 20,
              color: '#ffffff',
            }}>
            Matched count: {matchedCount}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={continueSwiping}
            style={{
              backgroundColor: '#7444C0',
              width: '50%',
              height: '25%',
              paddingVertical: 7,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginTop: 40,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={styles.matchesTextCardItem}>Continue Swiping!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Congratulations;
