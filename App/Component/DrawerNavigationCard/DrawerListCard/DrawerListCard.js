//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {moderateScale} from '../../../Constants/PixelRatio';
import {Icon, useTheme} from 'react-native-basic-elements';
import {FONTS} from '../../../Constants/Fonts';
import {Pressable} from 'react-native';
import NavigationService from '../../../Services/Navigation';

import {logout} from '../../../Redux/reducer/User';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../Constants/Colors';

// create a component
const DrawerListCard = () => {
  const colors = useTheme();
  const dispatch = useDispatch();

  const listData = [
    {
      img: require('../../../Assets/images/my_info.png'),
      title: 'Home',
      handleClick: 'Home',
      arrow: 'Yes',
    },
    {
      img: require('../../../Assets/images/study_tech.png'),
      title: 'AddItems',
      handleClick: 'AddItems',
      arrow: 'Yes',
    },
    {
      img: require('../../../Assets/images/health.png'),
      title: 'Community',
      handleClick: 'Community',
      arrow: 'Yes',
    },
    {
      img: require('../../../Assets/images/logout.png'),
      title: 'Logout',
      handleClick: () => {NavigationService.closeDrawer()},
      arrow: 'no',
      func: true,
    },
  ];

  return (
    <View
      style={{
        marginBottom: moderateScale(20),
      }}>
      {listData.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                if (item.func) {
                  item.handleClick();
                } else {
                  NavigationService.navigate(item.handleClick);
                }
              }}>
              <View
                style={{
                  ...styles.main_view,
                }}>
                <Image
                  source={item?.img}
                  style={{
                    height: moderateScale(20),
                    width: moderateScale(20),
                  }}
                />
                <View
                  style={{
                    ...styles.text_icon_view,
                  }}>
                  <Text
                    style={{
                      ...styles.my_info_txt,
                      color: COLORS.primaryFontColor,
                    }}>
                    {item.title}
                  </Text>

                  {item.arrow == 'Yes' ? (
                    <Icon
                      name="right"
                      type="AntDesign"
                      size={15}
                      style={{
                        alignSelf: 'center',
                        marginRight: moderateScale(20),
                      }}
                    />
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  text_icon_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: moderateScale(10),
    alignItems: 'center',
    flex: 1,
  },
  my_info_txt: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(14),
  },
  main_view: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
});

//make this component available to the app
export default DrawerListCard;
