import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component, useEffect} from 'react';
import {ProfilePhoto, ProfileWanita} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase  from "@react-native-firebase/app";



export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 5,
      idToken: null,
      nama: '',
      telepon: '',
      alamat: '',
      metode_pembayaran: '',
      listData: [],
      listData1: [],
      listData2: [],
      idEdit: null,
      userLocation: {
        coords: {
          accuracy: 0,
          altitude: 0,
          heading: 0,
          latitude: 0,
          longitude: 0,
          speed: 0,
        },

        mocked: false,
        timestamp: 0,
      },
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/riwayat.php';
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.ambilListData();
	  var firebaseConfig = {
 apiKey: "AIzaSyADO18nO--dT1tAssQCQhwVibchswbryg8",
  authDomain: "sibolgasiponcan.firebaseapp.com",
  projectId: "sibolgasiponcan",
  storageBucket: "sibolgasiponcan.appspot.com",
  messagingSenderId: "896657376556",
  appId: "1:896657376556:web:7c26361c793df82512d889"
};

if (!Firebase.apps.length){
	Firebase.initializeApp(firebaseConfig);		
} else {
	Firebase.app();
	
}

	 PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  
  onRegister: function (token) {
   console.log("TOKEN:", token);
  },
onRegister:(token) =>this.setState({idToken:token.token}),
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  async ambilListData() {
    var nik = this.props.route.params.nik;

    var pesan = this.state.pesan;

    await fetch(this.url + '/?op=pilihprofil&&nik=' + nik)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahpesan: json.data.result[0].jumlahpesan});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
        this.intervalID = setTimeout(this.ambilListData.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var nik = this.props.route.params.nik;

    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 20,
                fontWeight: '600',
                color: 'black',
              }}>
              PILIH RIWAYAT PENGAJUAN YANG STATUSNYA TELAH{' '}
              <Text style={{color: 'green'}}>SELESAI</Text> UNTUK MEMILIH METODE
              PENGIRIMAN
            </Text>
          </View>
          {this.state.listData.map((val, index) => (
            <View style={styles.chatContain} key={index}>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#81d4fa',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                  }}
                  onPress={() =>
                    this.props.navigation.replace('Riwayatdetail', {
                      jenis: val.jenis,
                      status: val.status,
                      creat_at: val.creat_at,
                      nik: nik,
                      id_pengaduan: val.id_pengaduan,
                    })
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.dari}>Jenis Pengajuan:</Text>
                    <Text
                      style={{
                        backgroundColor: 'orange',
                        borderRadius: 10,
                        paddingHorizontal: 5,
                        fontSize: 12,
                        color: 'white',
                      }}>
                      {val.status}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {val.jenis}
                  </Text>

                  <Text style={{color: 'black', marginTop: 10}}>
                    {val.creat_at}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.replace('Riwayatdetail', {
                      jenis: val.jenis,
                      status: val.status,
                      creat_at: val.creat_at,
                      nik: nik,
                      id_pengaduan: val.id_pengaduan,
                    })
                  }>
                  <Text style={styles.lastText} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },

  imgProfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  user: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },

  waktu: {
    color: 'orange',
    position: 'absolute',
    marginLeft: -100,
    fontSize: 12,
    marginTop: -28,
  },

  dari: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },

  lastText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 17,
    marginTop: 10,
  },
});
