import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const CardImage = ({image}) => {

  const navigation=useNavigation()

  return (
    <TouchableOpacity style={styles.cardImage} onPress={() => navigation.navigate('ImageScreen',{image})}>
      <Image
        source={{uri:
          image.src.portrait
          ? image.src.portrait
          : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png"}}
        style={{height:180, width:'100%'}}
      />
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  cardImage:{
    display:'flex',
    width:'49.5%',
    margin:4,
    justifyContent:'space-between',
    backgroundColor:'#2c292c',
    borderWidth:0,
    borderRadius:5
  }
})

export default CardImage
