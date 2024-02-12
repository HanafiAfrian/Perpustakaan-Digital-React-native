import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';


export default function Auth({ navigation, route }) {
const [email, setEmail] = useState('');
    const [nama, setNama] = useState('');
    const [no_telp, setNo_telp] = useState('');
 const [id, setId] = useState('');
	
 useEffect(() => {
        getData();
    }, []);
 const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {

                 if (value == null) {
                    
                       AsyncStorage.clear();
                      navigation.navigate('FrmLoginFirst');
                  
                } 

             else {

                        let user = JSON.parse(value);
						setEmail(user.Email);
                        setNama(user.Nama);                        
                        setNo_telp(user.No_telp);
                   setId(user.Id);
                   

                    
						
        setTimeout( () => {
		navigation.replace('Home',{email: user.Email, nama:user.Nama, 
		no_telp : user.No_telp,iduser : user.Id,});
        }, 2)
             
                

    


			 }

                })
        } catch (error) {
            console.log(error);
        }
    }


    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Splash');
        } catch (error) {
            console.log(error);
        }
    }
  

    return (
        <View style={styles.body}>
  
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})