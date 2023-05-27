import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';
import PageHeader from './../../components/PageHeader/index';



function Favorites(){
  return(
    <View style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>
    </View>
  )
}



export default Favorites