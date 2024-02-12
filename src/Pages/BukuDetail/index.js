import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
export default class App extends Component {
  render() {
	  var abstrak =	this.props.route.params.abstrak; 
	   var nama = this.props.route.params.nama;
 var iduser = this.props.route.params.iduser;
    return (
      <View style={styles.container}>

        <Pdf
          trustAllCerts={false}
          source={{
            uri: 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/files/abstrack/'+abstrak,
          }}
          page={1}
          scale={1.0}
          minScale={0.5}
          maxScale={3.0}
          renderActivityIndicator={() => (
            <ActivityIndicator color="black" size="large" />
          )}
          enablePaging={true}
          onLoadProgress={(percentage) => console.log(`Loading :${percentage}`)}
          onLoadComplete={() => console.log('Loading Complete')}
          onPageChanged={(page, totalPages) =>
            console.log(`${page}/${totalPages}`)
          }
          onError={(error) => console.log(error)}
          onPageSingleTap={(page) => alert(page)}
          onPressLink={(link) => Linking.openURL(link)}
          onScaleChanged={(scale) => console.log(scale)}
          spacing={10}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
          }}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 53,
            elevation: 1,
            borderRadius: 0,
            zIndex: 0,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
          }}>
          {/* ...Your TouchableOpacity components here */}
        </View>
		
		                    <View style={{flexDirection: 'row',display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  
}}>

</View>
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
                  onPress={() => this.props.navigation.navigate('Pesanan',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={Pesanan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
					 onPress={() => this.props.navigation.navigate('Pesanan',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}
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
                  onPress={() =>this.props.navigation.navigate('NotifikasiTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={Notifikasi}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});