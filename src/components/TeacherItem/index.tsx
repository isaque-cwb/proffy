import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'



const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container} >
        <View  style={styles.profile}>
        <Image 
        style={styles.avatar} 
        source={{ uri: 'http://github.com/isaque-cwb.png'}} />

        <View style={styles.profileInfo} >
            <Text style={styles.name}>Isaque Lourenço</Text> 
            <Text style={styles.subject}>Química</Text> 
        </View>
        </View>
        <Text style={styles.bio}>
            Entusiasta das melhores tecnologias de química avançada...
            {'\n'}{'\n'}
            Entusiasta das melhores tecnologias de química avançada...
            Entusiasta das melhores tecnologias de química avançada...
            Entusiasta das melhores tecnologias de química avançada...
            Entusiasta das melhores tecnologias de química avançada...
        </Text>
        <View style={styles.footer}>
            <Text  style={styles.price}>
                Preço/Hora {'   '}
                <Text style={styles.priceValue} >R$ 20,00</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]} >
                    {/* <Image source={heartOutlineIcon}/> */}
                    <Image source={unfavoriteIcon}/>
                </RectButton>
                <RectButton style={styles.contactButton} >
                    <Image source={whatsappIcon}/>
                    <Text  style={styles.contactButtonText}>Entrar em Contato</Text>
                </RectButton>

            </View>
        </View>
    </View>
  )
}

export default TeacherItem;