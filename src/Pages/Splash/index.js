import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 1000);
  }, [navigation]);

  return (
    <View style={{backgroundColor: '#1d256e', flex: 1}}>
        <View style={styles.container}>
          <Image
          source={Logo}
            style={styles.logo}
          />
          <Text
            style={{
              color: 'white',
              fontStyle: 'italic',
              marginHorizontal: 15,
              textAlign: 'center',
			  fontSize: 25,
            }}>
         Apliasi Perpustakaan Digital
          </Text>
        </View>
      </View>
  

  );
};

export default Splash;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#eaeaea',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#19232b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: '#c19737',
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  logo: {
    width: 250,
    height: 250,
    marginTop: 5,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
