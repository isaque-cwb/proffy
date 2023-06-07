import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from './../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';


function TeacherList() {

  const [isFiltersVisiblie, setIsFiltersVisible] = useState(true)
  const [teachers, setTheachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')


  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritesTeachersIds = favoritedTeachers.map((teacher: Teacher)=>{
          return teacher.id
        })
        setFavorites(favoritesTeachersIds)
      }
    })
  }


  useFocusEffect(()=>{
    loadFavorites()
  })




  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisiblie)
  }


  async function handleFilterSubmit() {
    loadFavorites()
    const { data } = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    data.length === 0
      ? (alert('não há Profys nesta matéria e horário'),setTheachers(data))
      : (setTheachers(data), setIsFiltersVisible(false));
  }




  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis'
        headerRigth={(
          <BorderlessButton onPress={handleToggleFiltersVisible} >
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        )} >
        {isFiltersVisiblie && (


          <View style={styles.searchForm}>
            <Text style={styles.label}>
              Matéria
            </Text>
            <TextInput style={styles.input}
              placeholder='Qual a matéria?'
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Dia da Semana
                </Text>
                <TextInput style={styles.input}
                  placeholder='Qual o dia?'
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Horário
                </Text>
                <TextInput style={styles.input}
                  placeholder='Qual o horário?'
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>


        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />)
        })}
      </ScrollView>
    </View>
  )
}



export default TeacherList