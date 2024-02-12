import React, {Component} from 'react';
import Beranda from './../../assets/icons/home.png';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {ThumbnailBuku} from '../../assets';
import Notifikasi from './../../assets/icons/notifikasi.png';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
export default class Buku extends Component {
  render() {
	    var id =	this.props.route.params.id;
		var iduser =	this.props.route.params.iduser; 
			var nama =	this.props.route.params.nama; 
		var id_kategori =	this.props.route.params.id_kategori; 
		var judul_buku =	this.props.route.params.judul_buku; 
		var pengarang =	this.props.route.params.pengarang; 
		var cover =	this.props.route.params.cover; 
		var abstrak =	this.props.route.params.abstrak; 
		var buku =	this.props.route.params.buku; 
		var tahun_terbit =	this.props.route.params.tahun_terbit; 
	var ket =	this.props.route.params.ket; 
		var harga =	this.props.route.params.harga; 
	var disc =	this.props.route.params.disc; 		
    return (
	<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
       <ScrollView>
        <View>
          {/* <Image style={styles.buku} source={Buku} />
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('DoaDetail')}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              LIHAT DOA
            </Text>
          </TouchableOpacity> */}
       <View style={styles.iconmain}>
  <Image style={styles.iconservice} source={{uri:'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/files/cover/'+cover}} />
 </View>
{/* new */}

<View style={{marginBottom:20}}>
  <Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'black'}}>
  {judul_buku}</Text>
<Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'orange'}}>{pengarang} - {tahun_terbit}</Text>

</View>

<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between'}}>
    
	<Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>{judul_buku} </Text>
<Text>  </Text>    

	 <TouchableOpacity
       onPress={() => this.props.navigation.navigate('BukuDetail',{abstrak:abstrak,iduser:iduser,nama:nama})}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
    <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>View</Text>
    </View>
     </TouchableOpacity>
  </View>
</View>
<View style={{marginBottom:20}}>
  <Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'black',paddingTop:20}}>
  {ket}</Text>
  <Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'black',paddingTop:20}}>

  Rp. {harga}</Text>
    <Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'black',paddingTop:20}}>

Discount. {disc} %</Text>
</View>
{/* doa row2 */}

{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
  <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetaildua')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10,marginLeft: 120, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Download</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
  {/* doa row 3 */}
  

{/* doa row 3 */}




{/* new */}



</View>
<View style={{height:100, backgroundColor:'white'}}></View>
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
	
	    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buku: {
    width: '96%',
    height: 480,
    alignSelf: 'center',
    
  },
  iconservice: {
    width: 80,
    height: 80,

    alignItems: 'center',
  },

  roundButton1: {
    marginBottom: 20,
    width: '96%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    // borderRadius: 5,
    backgroundColor: '#e6b86a',
    borderRadius: 5,
    alignSelf: 'center',
  },
    iconmain: {
    width: 70,
    height: 50,
    marginTop: 40,
	  marginBottom: 50,
	  alignSelf: 'center'
	
    // backgroundColor: 'red',
  },
});
