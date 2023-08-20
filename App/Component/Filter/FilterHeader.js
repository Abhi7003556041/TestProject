//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar as RNStatusBar,
} from 'react-native';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import {
  AppBar,
  Icon,
  useTheme,
  StatusBar,
  Card,
} from 'react-native-basic-elements';
import {COLORS} from '../../Constants/Colors';

const FilterHeader = ({func}) => {
  return (
    <Card style={styles.Card}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={styles.arrow_view}>
        <Pressable
          onPress={() => NavigationService.back()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 27,
              width: 27,
              borderRadius: 5,
              backgroundColor: '#F0F8FF',
              alignItems: 'center',
              justifyContent: 'center',
              // flexDirection:'row'
            }}>
            <Icon
              name="keyboard-arrow-left"
              type="MaterialIcon"
              style={{alignSelf: 'center'}}
              size={21}
            />
          </View>
          <View>
            <Text
              style={{
                ...styles.team_name_txt,
                color: COLORS.primaryFontColor,
                marginLeft: 15,
                paddingBottom: 3,
              }}>
              Filter
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => func()}
          style={{
            marginLeft: moderateScale(10),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...styles.team_name_txt,
              color: COLORS.primaryThemeColor,
              fontSize: 15,
              fontFamily: FONTS.semibold,

              // fontWeight: '500',
            }}>
            Clear All
          </Text>
        </Pressable>
      </View>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  team_name_txt: {
    // fontWeight: '600',
    fontSize: moderateScale(16),
    fontFamily: FONTS.bold,
  },
  Card: {
    paddingTop: moderateScale(45),
    paddingBottom: moderateScale(10),
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    elevation: 3,
    borderWidth: 0.9,
    borderColor: '#EBEBEB',
    paddingHorizontal: 15,
  },
  arrow_view: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default FilterHeader;
