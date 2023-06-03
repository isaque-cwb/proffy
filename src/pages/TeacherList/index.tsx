import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles'
import TeacherItem from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';


function TeacherList() {

  const [isFiltersVisiblie, setIsFiltersVisible] = useState(false)


  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisiblie)
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
              placeholderTextColor="#c1bccc" />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Dia da Semana
                </Text>
                <TextInput style={styles.input}
                  placeholder='Qualo dia?' />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Horário
                </Text>
                <TextInput style={styles.input}
                  placeholder='Qual o horário?' />
              </View>
            </View>
              <RectButton 
              style={styles.submitButton}
              onPress={handleToggleFiltersVisible}
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

        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}



export default TeacherList