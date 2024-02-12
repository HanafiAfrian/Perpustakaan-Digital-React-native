import React, {Component} from 'react';

import {Text, StyleSheet, View, TouchableOpacity, Image,TextInput,ScrollView,  SafeAreaView,} from 'react-native';
import {style} from './Style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
import {BannerFood, IconAirport, IconNasibox} from '../../assets';
import Beranda from './../../assets/icons/home.png';
import Notifikasi2 from './../../assets/icons/notifikasi.png';
import Adzan from './../../assets/icons/icnadzan.png';
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
	  listData1: [],
	   listData2: [],
      idEdit: null,
    };

    
  }
  componentDidMount() {

  }

 
 
  
  
  render() {
	  
	  
	  
      var nama = this.props.route.params.nama;
	var iduser = this.props.route.params.iduser;

    return (
	     <SafeAreaView style={{flex: 1, backgroundColor: '#eaeaea'}}>
      <ScrollView style={{flex: 1, backgroundColor: '#eaeaea'}}>
       
        <View
          style={{
			   marginTop:20,
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            height: 80,
            backgroundColor: 'white',
            marginBottom: 20,
            textAlign: 'center',
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 10,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('Pesanan',{telepon:telepon, nama_lengkap:nama_lengkap })}
              style={{
                borderRadius: 50,
                backgroundColor: '#00878c',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,
              }}>
              <Text style={{color: 'white'}}>Belum Bayar</Text>
			  
            </TouchableOpacity>
			 <View>
        
		   
					
					
                 
                                  
                    <Text style={{color: 'red', fontSize:15,
			width:25, height:25, textAlign:'right', backgroundColor:'yellow',
					borderRadius:50, color:'red', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute', right:0, top:-55 }} >
                    6
                      </Text>
                  
               
          
					
					
					
					
					
		  </View>
          </View>
        
         
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Selesai',{telepon:telepon, nama_lengkap:nama_lengkap })
            }>
              <View style={{borderRadius: 50,
                backgroundColor: '#eaeaea',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,}}>
               <Text style={{fontSize: 14, color: "gray"}}>Selesai</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 1 */}
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,

              marginRight: 20,
            }}>
            <View>
              <View style={style.viewData}>
                {this.state.listData.map((val, index) => (
                  <View
                    key={index}
                    style={{
                      display: 'flex',
					 width:320,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#eaeaea',
                      marginBottom: 10,
                      paddingRight: 10,
                      marginRight: 73,
                      borderRadius: 10,
                      paddingLeft: 10,
                      paddingTop: 10,
                      paddingRight: 10,
                      marginLeft: -10,
                    }}>
                    <View>

                 <Image source={{uri:'https://mutawif.co.id/api/muapi/images/keranjang.png'}} style={{width:40, height:40}} />
 <Text
                          style={{
                          
							color: "gray",
                            marginLeft: 0,
							 padding: -10,
							marginTop:30,
                          }}>
                         {val.metode_pembayaran} </Text>  



			 <Text> 
						 {val.waktu_pemesanan} - {val.jam_pemesanan}
						 
    </Text>

						 
				  </View>
                    <View style={{marginBottom: 20}}>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'bold',
                          fontSize: 18,
                          // marginLeft: 120,
                          marginRight: 20,
                          paddingRight: 10,
							color: "gray",
                          width: '100%',
                        }}>
                     {val.nama_produk} 
                      </Text>
                      <Text
                        style={{
                          color: 'red',
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10,
                          // marginRight: 10,
                        }}>
                      {val.RP}  {val.totalrupiah} 
                      </Text>
					     <Text
                        style={{
                          color: 'gray',
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10,
                          // marginRight: 10,
                        }}>
 
						   {val.totalreal}  {val.SR}  
                      </Text>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10, color:'red'
                          // marginRight: 10,
                        }}>
                     {val.X} {val.jumlah_order}
                      </Text>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                       
			
  <Text
                          style={{
                          
							color: "gray",
							marginTop: 5,
                            marginLeft: -193,
                          }}>
					
                        </Text>
                        <TouchableOpacity
                                           onPress={() =>
                            this.props.navigation.navigate('Pembayaran',{
							jumlah_order:val.jumlah_order,
								no_va:val.no_va,
								metode_pembayaran:val.metode_pembayaran,
								totalreal:val.totalreal,
								totalrupiah:val.totalrupiah,
								nama_produk:val.nama_produk,
								batas_tanggal : val.waktu_pemesanan,
								batas_jam:val.jam_pemesanan
							},
							)
                          }
                          style={{
                            backgroundColor: 'orange',
                            borderRadius: 5,
                            padding: 10,
                           Width: 80,
						   Height : 10,
                          
                            marginLeft: 0,
                            paddingRight: 2,
                            marginRight: 0,
                          }}>
                          <Text> {val.lihat} </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
					
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#eaeaea',
              marginTop: 10,
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
