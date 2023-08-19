//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox, useTheme} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {COLORS} from '../../Constants/Colors';

// create a component
const Community_Sub = () => {
  const [check, setCheck] = useState(false);

  const subject = [
    {
      exercise_name: 'English',
    },
    {
      exercise_name: 'Maths',
    },
    {
      exercise_name: 'Social Sciences',
    },
    {
      exercise_name: 'Physical Education',
    },
    {
      exercise_name: 'Computer Basics',
    },
    {
      exercise_name: 'Arts (Drawing)',
    },
    {
      exercise_name: 'Regional Language(s)',
    },
    {
      exercise_name: 'History',
    },
    {
      exercise_name: 'Languages and linguistics',
    },
    {
      exercise_name: 'Performing arts',
    },
  ];
  return (
    <View>
      {subject.map((item, index) => {
        return (
          <View key={index}>
            <View
              style={{
                ...styles.main_view,
              }}>
              <CheckBox
                checked={check}
                onChange={val => setCheck(val)}
                size={17}
                activeColor={COLORS.primaryThemeColor}
                containerStyle={{borderWidth: 1}}
              />
              <Text
                style={{
                  ...styles.exercise_name_txt,
                }}>
                {item.exercise_name}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  main_view: {
    marginTop: moderateScale(15),
    marginHorizontal: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  exercise_name_txt: {
    marginLeft: moderateScale(10),
    fontFamily: FONTS.semibold,
    fontSize: moderateScale(15),
  },
});

//make this component available to the app
export default Community_Sub;
