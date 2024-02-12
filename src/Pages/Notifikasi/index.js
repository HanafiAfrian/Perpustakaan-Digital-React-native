import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image,SafeAreaView,ScrollView} from 'react-native';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
import {IconBack, BniIcon, CodIcon, CcIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioButton from 'react-native-simple-radio-button-input';
import Beranda from './../../assets/icons/home.png';
import Notifikasi2 from './../../assets/icons/notifikasi.png';
import Adzan from './../../assets/icons/icnadzan.png';

export default class Notifikasi extends Component {
  render() {
    return (
	<SafeAreaView style={{backgroundColor: '#222a32', flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('FooterTab')}>
            <Icon
              name="chevron-left"
              size={20}
              color="#fff"
              style={{
                marginTop: -10,
                padding: 7,
                marginLeft: -10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>Notifikasi</Text>

          <View></View>
        </View> */}

        <View style={{marginTop: 20}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Icon
              name="bullhorn"
              size={30}
              color="orange"
              style={{
                padding: 7,
                marginLeft: -10,
              }}
            />

            <View style={{maxWidth: 180}}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:'gray'}}>
                Dapat cashback 10% tanpa minimal transaksi
              </Text>
            </View>
            <Text style={{fontSize: 12,color:'gray'}}>23 Des, 02.45 PM</Text>
          </View>
          <Text style={{fontSize: 12, marginLeft: 60,color:'gray'}}>
            Dapatkan cashback 10% hingga 25.000 tanpa minimal transaksi
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#eaeaea',
              marginTop: 10,
              // marginLeft: 20,
            }}></View>
        </View>
		
	
	
      </ScrollView>
	  <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 53,
                elevation: 1,
                borderRadius: 0,
                zIndex: 0,
                //marginTop: -65,
                position :'absolute',
				bottom:0,
				width:'100%',
				backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home',{nama:nama, iduser:iduser
				  })}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 30,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'orange'}}>Home</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Pesanan',{nama:nama, iduser:iduser})}>
                  <Image
                    source={Pesanan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
					 onPress={() => this.props.navigation.navigate('Pesanan',{nama:nama, iduser:iduser})}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Orders</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  	   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Notifikasi',{nama:nama, iduser:iduser})}>
                  <Image
                    source={Notifikasi2}
                    style={{
                      width: 23,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  
			  
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
		
		
		
                <TouchableOpacity
                  onPress={() =>this.props.navigation.replace('Profil',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={IconProfilku}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
		
                    }}
                  />
				
                  <Text style={{marginBottom: 20,color:'gray'}}>Profil</Text>
                </TouchableOpacity>
              </View>
			  
			  
		
            </View>
	
	   </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
