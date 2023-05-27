import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from './../pages/TeacherList/index';
import Favorites from './../pages/Favorites/index';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'


const { Navigator, Screen } = createBottomTabNavigator()



function StudyTabs() {
    return(

        <Navigator
            screenOptions={{
                tabBarStyle:{
                 elevation: 0,
                 shadowOpacity: 0,
                 height: 100   
                },
                tabBarItemStyle:{
                    
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                tabBarIconStyle:{
                    flex:0,
                    width:20,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                },
                tabBarLabelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                tabBarInactiveBackgroundColor: '#fafafc',
                tabBarActiveBackgroundColor: '#ebebf5',
                tabBarInactiveTintColor: '#c1bccc',
                tabBarActiveTintColor: '#4E8799',
                headerShown: false
            }}
        >
            <Screen 
            name='TeacherList' 
            component={TeacherList} 
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({size, color})=>{
                    return(
                        <Ionicons name='ios-easel' size={size} color={color}/>
                    )
                }

            }}
            />
            <Screen 
            name='Favorites' 
            component={Favorites} 
            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({size, color})=>{
                    return(
                        <Ionicons name='ios-heart' size={size} color={color}/>
                    )
                }

            }}
            />
        </Navigator>
    )
}

export default StudyTabs;