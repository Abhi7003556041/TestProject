//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Card, Icon, useTheme} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import DrawerListCard from './DrawerListCard/DrawerListCard';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import {Pressable} from 'react-native';
import NavigationService from '../../Services/Navigation';
import {TouchableOpacity} from 'react-native';

// create a component
const DrawerNavigationCard = () => {
  const {userData} = useSelector(state => state.User);

  return (
    <View
      style={{
        flex: 1,
        marginTop: moderateScale(35),
      }}>
      <Card
        style={{
          borderRadius: 0,
          paddingBottom: moderateScale(20),
          paddingTop: moderateScale(30),
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/images/pullup.jpg')}
            style={{
              height: moderateScale(100),
              width: moderateScale(100),
              borderRadius: moderateScale(50),
            }}
          />

          <Text
            style={{
              ...styles.user_name_txt,
              color: COLORS.primaryFontColor,
            }}>
            Abhijit Adak
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => NavigationService.closeDrawer()}
          style={{
            position: 'absolute',
            top: moderateScale(7),
            right: moderateScale(10),
          }}>
          <Icon name="squared-cross" type="Entypo" size={25} />
        </TouchableOpacity>
      </Card>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerListCard />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  user_name_txt: {
    marginTop: moderateScale(5),
    fontFamily: FONTS.bold,
    fontSize: moderateScale(18),
  },
  phone_number: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
  },
});

//make this component available to the app
export default DrawerNavigationCard;
