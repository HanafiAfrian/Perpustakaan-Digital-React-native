import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Logo} from '../../assets/images';
import { Picker } from '@react-native-picker/picker';

export default class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
		email: '',
      password: '',
      password1: '',
      hidden: true,
      hidden2: true,
      listData: [],
	  userType: 'pelajar',
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/register.php';
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
  if (this.state.nama == '') {
      alert('Silakan Isi Nama Lengkap');
    } else if (this.state.nohp == '') {
      alert('Silakan Isi Nomor Telepon');
    } else if (this.state.nohp.length < 11) {
      alert('Input Nomor Telepon Kurang');
    } else if (this.state.email == '') {
      alert('Silakan Isi Email');
    } else if (this.state.password == '') {
      alert('Silakan Isi Password');
    } else if (this.state.password1 == '') {
      alert('Silakan Isi Konfirm Password');
    } else if (this.state.password != this.state.password1) {
      alert('Konfirm Password Salah');
    } else if (this.state.password.length < 6) {
      alert('Input Password Kurang');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=daftar';

        var nama = this.state.nama;
        var nohp = this.state.nohp;
        var nik = this.state.nik;
        var email = this.state.email;
        var password = this.state.password;
        var password1 = this.state.password1;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nama=' +
          nama +
          '&nohp=' +
          this.state.nohp +
          '&email=' +
          this.state.email +
          
          '&password=' +
          password +
		  '&status=' +
          this.state.userType,
		  
		  
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
            alert(
              'Registar Berhasil, Silahkan Login Menggunakan NIK dan Password anda',
            );
            this.props.navigation.replace('Login');
          }
 else if (responseJson == 'false') {
            alert('Email Sudah Terdaftar');
          }
		  
		  else if (responseJson == 'salah') {
            alert('No Telepon Sudah Terdaftar');
          }
        });
    }
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 32, color: '#004ba0'}}>
            Pendaftaran
          </Text>
          {/* undrawimage */}

          {/* <Image
                        source={Iconsiponcan}
                        style={{
                            width: 200,
                            height: 200,
                            marginTop: 30,
                            alignSelf: 'center',
                            backgroundColor: 'red'
                        }}
                    /> */}
          {/* undrawimage */}

          {/* noHp */}
          <TextInput
            label="Nama Lengkap (Sesuai KTP)"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{backgroundColor: 'white', marginTop: 35}}
            value={this.state.nama}
            onChangeText={text => this.setState({nama: text})}
          />
          {/* endNoHp */}
          {/* nik */}
         
          {/* noHp */}
          <TextInput
            label="No. HP"
			  maxLength={13}
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.nohp}
            onChangeText={text => this.setState({nohp: text})}
          />
          {/* endNoHp */}

          <TextInput
            label="Email Aktif"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{backgroundColor: 'white', marginTop: 35}}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          {/* endNik */}
          {/* password */}
          <TextInput
            label="Password (Min. 6 Karakter)"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          <TextInput
            label="Password"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password1}
            onChangeText={text => this.setState({password1: text})}
          />

          <BouncyCheckbox
            text="Show Password"
            fillColor="#004ba0"
            unfillColor="#FFFFFF"
            style={{marginTop: 15, marginBottom: 10, width: '40%'}}
            textStyle={{
              textDecorationLine: 'none',
            }}
            innerIconStyle={{
              borderRadius: 9,

              borderWidth: 2, // to make it a little round increase the value accordingly
            }}
            onPress={() =>
              this.setState({
                hidden: !this.state.hidden,
                hidden2: !this.state.hidden2,
              })
            }
          />
<View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 15, overflow: 'hidden', marginTop: 15 }}>
  <Picker
    selectedValue={this.state.userType}
    style={{ height: 50, width: '100%' }}
    onValueChange={(itemValue) => this.setState({ userType: itemValue })}
  >
    <Picker.Item label="Pelajar" value="Pelajar" />
    <Picker.Item label="Dosen/Guru" value="Dosen/Guru" />
    <Picker.Item label="Umum" value="Umum" />
  </Picker>
</View>
          {/* showHide */}

          {/* btnLogin */}

          {/* <View style={styles.screenContainer}>
            <Button
              title="DAFTAR"
              color="#005b9f"
              onPress={() => this.klikSimpan()}
            />
          </View> */}

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Daftar
            </Text>
          </TouchableOpacity>
          {/* endBtnLogin */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>Sudah punya akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, color: '#004ba0'}}>
                {' '}
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 20,
  },

  screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
});
