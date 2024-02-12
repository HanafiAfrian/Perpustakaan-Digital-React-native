import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
    Linking,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Logo} from '../../assets/images';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidden: true,
      listData: [],
	    idToken :null,
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/login.php';
  }
  componentDidMount() {
 this.ambilListData();



	
  }

  async ambilListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  klikSimpan() {
    if (this.state.email == '') {
      alert('Masukkan Email');
    } else if (this.state.password == '') {
      alert('Silakan Isi Password');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=login';
        var str = '1 2 3 4 5 6 7 8 9 0';
        var waktu = new Date().getMilliseconds();
        var waktu2 = new Date().getSeconds();
        var waktu3 = new Date().getMinutes();
        var waktu4 = new Date().getHours();
        var waktu5 = new Date().getDay();
        var every_word_im_shuffling = str
          .split(/\s\b(?!\s)/)
          .sort(function () {
            return 0.2 - Math.random();
          })
          .join(+waktu + waktu2 + waktu3 + waktu4 + waktu5);
        console.log(every_word_im_shuffling);
        var res = every_word_im_shuffling.substring(0, 4);
        var email = this.state.email;
        var password = this.state.password;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + this.state.email +
		'&password=' + this.state.password ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'ok') {
            this.props.navigation.replace('Authotp', {email: this.state.email});
          } else if (responseJson == 'nonaktif') {
            alert('Akun Anda Belum Aktif Silahkan Coba Beberapa Saat Lagi');
          } else {
            alert('Email dan Password tidak Sesuai');
            this.setState({email: ''});
            this.setState({password: ''});
            this.setState({nohp: ''});

            this.ambilListData();
          }
        });
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          {/* <Text style={{textAlign: 'center', fontSize: 32, color: '#004ba0'}}>
            SIPONCAN
          </Text> */}
          {/* undrawimage */}
 
              
          <Image
            source={Logo}
            style={{
              width: '100%',
               height: 80,
              marginTop: 20,
              alignSelf: 'center',
              marginBottom: 50,
			   resizeMode: 'contain',
            }}
          />
          {/* undrawimage */}
<Text
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#004ba0',
              marginBottom: 20,
            }}>

Silahkan Login Menggunakan Email dan Password Anda Yang Telah Terdfatar

</Text>
          {/* email */}
          <TextInput
            label="Email"
            maxLength={16}
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
           
            style={{backgroundColor: 'white'}}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          {/* endNik */}
          {/* password */}
          <TextInput
            label="Password"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 10}}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          {/* endPassword */}

          {/* showHide */}
          {/* <TouchableOpacity
                        onPress={() => this.setState({ hidden: !this.state.hidden })}
                    >
                        <Text>Go</Text>
                    </TouchableOpacity> */}

          <BouncyCheckbox
            text="Show Password"
            fillColor="#004ba0"
            unfillColor="#FFFFFF"
            style={{marginTop: 15, marginBottom: 10}}
            textStyle={{
              textDecorationLine: 'none',
            }}
            innerIconStyle={{
              borderRadius: 9,

              borderWidth: 2, // to make it a little round increase the value accordingly
            }}
            onPress={() => this.setState({hidden: !this.state.hidden})}
          />

          {/* showHide */}

          {/* lupaPassword */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LupaPassword')}>
            <Text style={styles.lupapassword}>Lupa Password</Text>
          </TouchableOpacity>
          {/* endLupaPassword */}

          {/* btnLogin */}

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Masuk
            </Text>
          </TouchableOpacity>
          {/* <View >
            <Button
              title=
              color="#005b9f"

            />
          </View> */}
          {/* endBtnLogin */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>Belum punya akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Daftar')}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, color: '#005b9f'}}>
                {' '}
                Daftar
              </Text>
            </TouchableOpacity>
			
		
          </View>
		  	
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  lupapassword: {
    color: '#004ba0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },

  screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
});
