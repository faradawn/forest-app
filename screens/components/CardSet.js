import * as React from 'react'
import { Button, Text, View, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../assets/styles'
import Card from './CardUnit'
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from './ProgressBar'
import {loadWordSet, setProgress, getProgress, buildArray} from '../api/API'
import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import wordset2 from '../data/wordset2.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cards(props) {
  // todo
  var wordset;
  if(props.id === 1){
    wordset = wordset2;
  }

  const [arr, setArr] = React.useState([]);
  console.log('arr is', arr);

  const renderItem = ({ item }) => {
    let foundItem = arr.find(val => val.id === item.id);
    const addMark = async () => {
      let newId = parseInt(item.id) + props.id*10000;
      console.log(newId);
      if(!foundItem){
        setArr([...arr, {id: newId, date: (new Date()).getTime(), wordset: props.id}])
      }
      else
        setArr(arr.filter(val => val.id !== item.id));
    }


    return (
      <View style={styles.lineContainer}>
        <View style={styles.oneLine}>
          <Text style={styles.first}>{item.chinese}</Text>
          <TouchableOpacity
            onPress={addMark}>
            {foundItem ? <Ionicons name="bookmark" size={24} color="black" />
            : <Ionicons name="bookmark-outline" size={24} color="black" />}
          </TouchableOpacity>
        </View>
        <View style={styles.secondLine}>
          <Text>{item.latin}</Text>
          <Text>{item.category}</Text>
          <Text>{item.family}</Text>
        </View>
      </View>
    );
  };

  return(
    <View style={styles.container}>
      <Text> 单词一</Text>
      <FlatList
        data={wordset.Sheet1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: theme.marginTop+20, 
    backgroundColor: 'white',
    flex: 1,
  },
  lineContainer:{
    width: theme.authWidth,
    backgroundColor: 'pink',
    marginTop: 10,
  },
  oneLine:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: theme.authWidth,
  },
  oneText:{
    fontSize: 25,
    letterSpacing: 2,
    marginBottom: 30,
  },
  secondLine:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    width: theme.authWidth,
  }
})