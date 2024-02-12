import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
// import {block} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';

export default class FrmLoginFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData: [],

      idEdit: null,
    };

    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/berita.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var id = '1';

    await fetch(this.url + '/?op=ambilgambar&id=' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({gambar1: json.data.result[0].gambar1});
        this.setState({gambar2: json.data.result[0].gambar2});
        this.setState({gambar3: json.data.result[0].gambar3});
        this.setState({gambar4: json.data.result[0].gambar4});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
        alert('Cek Koneksi Internet');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://siponcan.disdukcapilsibolga.id/siponcan/files/' + this.state.gambar1,
          }}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text} />
          <CustomButton
            style={{
              marginTop: 10,
              marginBottom: 20,
              borderRadius: 40,
              textAlign: 'center',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 20,
              elevation: 5,
            }}
            title=" Mulai "
            color="#1d256e"
            onPressFunction={() => this.props.navigation.navigate('Login')}
          />
        </ImageBackground>

        {/* tengah */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bnttext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    fontSize: 42,

    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 200,
  },
  midtext: {
    color: '#828487',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  line: {
    height: 1,
    width: 130,
    backgroundColor: '#828487',
  },

  container: {
    flex: 1,

    backgroundColor: '#1d256e',
    // marginHorizontal: 5,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
  },

  btnsos: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
  },

  logoicon: {
    width: 20,
    height: 20,
    marginLeft: 0,
    marginRight: 20,
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    // fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },

  backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
  },
});
