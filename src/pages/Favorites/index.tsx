import React, { useState } from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './styles';
import PageHeader from './../../components/PageHeader/index';
import TeacherItem, { Teacher } from './../../components/TeacherItem/index';



function Favorites(){

  const [teachers, setTeachers] = useState([])

  return(
    <View style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos' />
      <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
      >
        {teachers.map((teacher:Teacher)=><TeacherItem key={teacher.id}  teacher={teacher}/>
)}
      </ScrollView>
    </View>
  )
}



export default Favorites