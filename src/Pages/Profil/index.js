import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
import {BannerFood, IconAirport, IconNasibox} from '../../assets';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import {
  ProfilePhoto,
  IconUsermenu,
  IconNext,
  IconVoc,
  IconPromo,
  IconPembayaran,
  IconBahasa,
  IconKeluar,
  IconFavorit,
  IconBantuan,
} from '../../assets';
import {IconAkun, Logouser, Logokey} from '../../assets';
import {IconBack} from '../../assets';
export default class Akun extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/ambilakun.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var telepon = this.props.route.params.nama_lengkap;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	var email_pribadi = this.props.route.params.email_pribadi;
    await fetch(this.url + '/?op=pilihprofil&telepon=' + telepon)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
	
	
		
  render() {
	 
	    var telepon =	this.props.route.params.telepon; 
	 	 var nama_lengkap =	this.props.route.params.nama_lengkap; 
		 	 var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#eaeaea'}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#222a32',
              height: 180,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <View style={{marginTop: 20, marginLeft: 20}}>
              <TouchableOpacity
                style={styles.iconbackstyle}
                onPress={() => this.props.navigation.navigate('Profil')}>
                <Icon name="chevron-left" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20, marginLeft: -20}}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Data Akun
              </Text>
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: -120,
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 20,
              padding: 10,
            }}>
            <View style={styles.article}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 60}}
                    source={ProfilePhoto}
                  />
                </View>
				<View>
            {
                this.state.listData.map((val,index)=>(
                   
                      <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.nama}</Text>

                  
                ))
            }
        </View>
                <View>
                 

                 
                </View>
              </View>
            </View>
			
			 
            <View style={styles.containeruser1}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilnama')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Nama Lengkap</Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text>  <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.nama_lengkap}</Text>

                  
                ))
            }
        </View></Text>
                  <Image
                    style={{width: 14, height: 14, marginTop: 5, marginLeft: 5}}
                    source={IconNext}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.garis}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilemail')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Email</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
  <Text> <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.email_pribadi}</Text>

                  
                ))
            }
        </View></Text>
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 14,
                        marginTop: 5,
                        marginLeft: 5,
                        height: 14,
                      }}
                      source={IconNext}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.garis}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilnohp')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Nomor Handphone</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text><View>
            {
                this.state.listData.map((val,index)=>(
                   
                         <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.telepon}</Text>

                  
                ))
            }
        </View></Text>
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 14,
                        marginTop: 5,
                        marginLeft: 5,
                        height: 14,
                      }}
                      source={IconNext}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

           
           
              
            {/* <View style={styles.garis}></View> */}
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
	

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // marginTop: -20,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,
  },

  menustyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,
  },

  garis: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    marginTop: 10,
  },

  logoiconmail: {
    width: 20,
    height: 20,
  },

  menutext: {
    marginLeft: 10,
	color: "black",
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    // marginBottom: -20,
  },
  welcome1: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  welcome2: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
});
