import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Card } from 'react-native-basic-elements'
import { COLORS } from '../../Constants/Colors'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'


const FilterFooter = () => {
    return (
        <Card style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingVertical:15,
            paddingHorizontal:20,
            elevation:5
            // paddingBottom:20
        }}>
            <Pressable 
            onPress={()=>NavigationService.back()}
            style={{
                height:moderateScale(45),
                width:160,
                borderWidth:1.5,
                borderColor:COLORS.primaryThemeColor,
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center'
            }}>
                 <Text
                      style={{
                        color: COLORS.primaryThemeColor,
                        fontSize: 17,
                        fontFamily:FONTS.medium
                        // fontFamily: 'Trebuchet MS, sans-serif',
                      }}>
                      Cancel
                    </Text>
            </Pressable>
            <Pressable 
            onPress={()=>NavigationService.navigate('Home')}
            
            style={{
                height:moderateScale(45),
                width:160,
                backgroundColor:COLORS.primaryThemeColor,
                borderColor:COLORS.primaryThemeColor,
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center'
            }}>
                 <Text
                      style={{
                        color: COLORS.secondaryThemeColor,
                        fontSize: 17,
                        fontFamily:FONTS.medium

                      }}>
                      Apply
                    </Text>
            </Pressable>
        </Card>
      )
 }
  
export default FilterFooter
