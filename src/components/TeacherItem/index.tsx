import React, { useState } from 'react';
import { Image, Text, View, Linking } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string
}

export interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleToLinkWhatsapp() {
        Linking.openURL(`whatsapp://send?text=Olá Gostaria de aprender Química&phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavortes() {

        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorited) {
            //remover dos favoritos
            const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) =>{
                return teacherItem.id === teacher.id
            })

            favoritesArray.splice(favoritesIndex, 1)
            setIsFavorited(false)

        } else {
            // adicionar aos favoritos
            favoritesArray.push(teacher)

            setIsFavorited(true)
            
        }
        
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

    }


    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }} />

                <View style={styles.profileInfo} >
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{teacher.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue} >R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton 
                    onPress={handleToggleFavortes}
                    style={[
                        styles.favoriteButton,
                        isFavorited ? styles.favorited : {},
                    ]}
                    >
                        {isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }

                    </RectButton>
                    <RectButton
                        style={styles.contactButton}
                        onPress={handleToLinkWhatsapp}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    )
}

export default TeacherItem;