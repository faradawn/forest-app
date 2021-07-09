import * as React from 'react'
import { Button, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles, {theme} from '../assets/styles'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import CardSet from './components/CardSet'

const Stack = createStackNavigator();

function SetHome({ navigation }) {
  return (
    <View style={styles.homePage}>
      <TouchableOpacity onPress={() => navigation.navigate('CardSet1')} >
        <ImageBackground
          source={require('../assets/wallpaper/card-slim.png')}
          imageStyle={{borderRadius: theme.border}}
          style={style1.imageCard}>
            <Text> 园林树木拉丁名150个 </Text>
        </ImageBackground> 
      </TouchableOpacity>

      <View style={{height:30}}/>

      <TouchableOpacity onPress={() => navigation.navigate('CardSet2')} >
        <ImageBackground
          source={require('../assets/wallpaper/card-slim.png')}
          imageStyle={{borderRadius: theme.border}}
          style={style1.imageCard}>
            <Text> 园林花卉拉丁名200个 </Text>
        </ImageBackground> 
      </TouchableOpacity>

    </View>
  )
}


 
export default function Cards() {  
  return(
    <Stack.Navigator>
      <Stack.Screen name='CardsList' component={SetHome} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
      
   
}

const style1 = StyleSheet.create({
  imageCard: {
    height: 130,
    borderRadius: theme.border,
    width: theme.width+50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 4,
    shadowOpacity: 0.4,
  }
})