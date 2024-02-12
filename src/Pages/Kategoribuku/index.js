import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';

import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import Adzan from './../../assets/icons/icnadzan.png';

import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,TextInput,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import {Directions} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag,} from '../../assets';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import moment from 'moment'
import 'moment/locale/id'

import {
  
  ThumbnailBuku,
  Laravel,
} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

 function Jam() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View className="App">
      <Text style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </Text>
    </View>
  );
}
 class Ambilwaktu extends Component {
  render() {
    const date= new Date()

 
    return (
      <View>
        <Text style={{
                      color: 'white',
                      marginLeft: -3,
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}> {moment(date).format('LL')} M</Text>
      
 
      </View>
    )
  }
}


const date = new Date();



export default class Home extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
		currentCount: 5,
		   nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
	 listData1: [],
	  listData2: [],
	
      idEdit: null,
	userLocation :{
	 coords: {
	 accuracy: 0,
	 altitude: 0,
	 heading: 0,
	 latitude: 0,
	 longitude: 0, 
	 speed: 0 
	
	 },
	 
	 mocked: false, 
	 timestamp: 0,
  }
 
 };

    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/buku.php';
	this.url2 = 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/buku.php';

   }timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
 componentDidMount()  {
	 	  this.ambilListData1();	 
	 this.ambilListData2();
	

 }
 componentWillUnmount() {
    clearInterval(this.intervalId);
  }

    async ambilListData1() {
 
  var idkategori = this.props.route.params.idkategori;
	
    await fetch(this.url1 + '/?op=getkategori&idkategori=' + idkategori)
      .then(response => response.json())
      .then(json => {
		   this.setState({jumlah:json.data.result[0].jumlah});
		    this.setState({nm_kategori:json.data.result[0].nm_kategori});
        console.log('Hasil yang didapatKANNN: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
   async ambilListData2() {
 
   await fetch(this.url2 + '/?op=kategoribuku')
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData2: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  
  
  
  
  

 render() {
	 var nama = this.props.route.params.nama;
 var iduser = this.props.route.params.iduser;
  var nm_kategori = this.props.route.params.nm_kategori; 
  var idkategori = this.props.route.params.idkategori;
    return (
      <SafeAreaView style={{backgroundColor: '#eaeaea', flex: 1}}>
        <ScrollView>
          <View style={{backgroundColor: '#222a32', height: 180, opacity: 0.9}}>
    
              <View style={styles.containeruser}>
			    
			  
                <View>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                   <Ambilwaktu />
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
            
                  </Text>
                </View>
         
               
					
				
			   
              </View>

              <View style={styles.container}>
                <View>
                  <Text style={styles.saldo1}>
					
 Selamat Datang {nama} {nm_kategori}{idkategori} {iduser}
					            
                  </Text>
                  <Text style={styles.saldo2}>
                    <Jam />
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}></Text>
                  </Text>
               
                </View>
              </View>
           
          </View>
          <View>
        
            {/* Button Top */}
             <View style={styles.container2}>
			   <Text style={{textAlign: 'center', fontSize: 16 ,color: "red", width:'200'}}>
                 
 Kategori Buku {nm_kategori} Yanf Ditemukan
			  
               </Text>	
  
    </View>
            {/* End Button Top */}
            <View style={styles.maincontain}>
             <View style={styles.rowicon}>
			 
			  {
                this.state.listData1.map((val,index)=>(
                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('Buku',{id :val.id,nama:nama, iduser:iduser,
				   id_kategori:val.id_kategori,
				   judul_buku :val.judul_buku,
				   pengarang : val.pengarang,
				   cover : val.cover,
				   	abstrak : val.abstrak,
				 
				   buku: val.buku,
				   tahun_terbit:val.tahun_terbit,
				   })}>
				    <View style={styles.iconmain}>
			  <Image style={styles.iconservice} source={{uri:'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/files/cover/'+val.cover}} />
 
  <View style={styles.maincontainsec2}>
  <Text style={{textAlign: 'center', fontSize: 16 ,color: "red", width:'200'}}>
                 
			  {val.judul_buku}
			  
               </Text>		
 </View> 			   
				  </View> 
</TouchableOpacity>
                  
                ))
            }

			 
			 
			 
        
        
    </View>
                         <View style={{flexDirection: 'row',display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: -80,
paddingTop: -80,
}}>

</View>


 
             <View style={styles.rowiconcenter}>     
           

		   </View>
            </View>
          </View>
       <View style={styles.maincontainsec}>
            <Text style={{fontSize: 16, fontWeight: 'bold' , color: "gray"}}>
             Kategori Buku
            </Text>

            <View>
			
            </View>
          </View>
		  
		  
		   <ScrollView horizontal={true} style={styles.imgads}>
		    {
                this.state.listData2.map((val,index)=>(
				
                   <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Kategoribuku',{idkategori :val.id_kategori,iduser:iduser,nama:nama,nm_kategori:val.nm_kategori} )}>
			   
			 
  <View >
  <Text style={{textAlign: 'center', fontSize: 16 ,color: "gray", fontWeight: 'bold', width:'200'}}>
                 
			  {val.nm_kategori}
			  
               </Text>		
			   <Image style={styles.bannerstyle} source={{uri:'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/files/cover/'+val.cover}} />
 </View> 	   
</TouchableOpacity>
                 

				 
                ))
				
				
	
	
            }
		  
		     </ScrollView>
            
              
            
        
 
       
		
		  
	
        </ScrollView>
		
		
           

       <View style={styles.maincontainsec}>
            <Text style={{fontSize: 16, fontWeight: 'bold' , color: "gray"}}>
             Kategori Buku 
            </Text>

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
      </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
  imagebg: {
    // width: 200,
    marginBottom: -60,
  },

  bannerstyle: {
    width: 300,
    height: 120,
    borderRadius: 15,
    // marginLeft: 8,
    marginRight: 8,
  },
  maincontainsec: {
    display: 'flex',
    paddingTop: 20,
	 paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 75,
    paddingLeft: 15,
    backgroundColor: 'white',
  }, 
  maincontainsec2: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 0,
    padding: 5,
    margin: 5,
    width: 140,
	 height: 50,
    alignItems: 'center',
    backgroundColor: 'orange',
	 marginLeft: -30,
  },
  imgads: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,

  },

  bordercataktif: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  bordercat: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 70,
    textAlign: 'center',
  },

  bordercat: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,

    alignItems: 'center',
  },

  bordercat1: {
    fontSize: 10,

    borderColor: '#20232a',
    backgroundColor: 'orange',
    borderRadius: 50,
    color: 'white',
    padding: 2,
    margin: 2,
    width: 50,
    textAlign: 'center',
  },

  roundedcat: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  iconservice: {
    width: 120,
    height: 120,
    marginLeft: -10,
	 marginRight: -10,
	 	 marginTop: -90,
  },

  iconmain: {
    width: 70,
    height: 50,
    marginLeft: 25,
    marginTop: 150,
	
    // backgroundColor: 'red',
  },
  textads: {
    marginLeft: 15,
    marginTop: 20,
    // backgroundColor: 'red',
  },

  maintext: {
    marginLeft: 40,
  },
  saldo1: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  saldo2: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconssaldo: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  welcome1: {
    marginLeft: 10,

    textAlign: 'center',
    color: 'white',
    fontSize: 18,

    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
  },

  iconstyles: {
    marginRight: 30,
    justifyContent: 'center',

    width: 22,
    height: 22,
  },

  iconsaldotext: {
    textAlign: 'left',
    marginLeft: -2,
    fontSize: 10,
  },

  icondrawer: {
    marginRight: 10,
    width: 50,
    height: 50,
  },

  logo: {
    width: 150,
    height: 30,
    marginLeft: 30,
    marginTop: -10,
  },

  logosub: {
    backgroundColor: 'orange',
    width: 260,
    borderRadius: 40,
    height: 50,
    padding: 20,
    zIndex: 2,
    marginBottom: 20,
  },

  logotagicon: {
    marginTop: -60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  maincontain: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'row',
     borderTopStartRadius: 20,
     borderTopEndRadius: 20,
    marginTop: 10,
    zIndex: 0,
    // flexWrap: 'wrap',
    paddingBottom: 20,
  },

rowicon: {
    flexDirection: 'row',
    paddingRight: '20%',
    paddingLeft: '8%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  rowiconcenter: {
    flexDirection: 'row',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
	paddingBottom: 100,
  },
  mainarticle: {
    backgroundColor: 'white',
    flex: 1,

    marginTop: 10,

    paddingBottom: 20,
  },

  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
	
  },
});