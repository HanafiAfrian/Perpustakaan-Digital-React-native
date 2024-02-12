import React, {Component} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
;

export default class Authotp extends Component {
	  constructor(props) {
    super(props);
    this.state = {
     
      listData: [],
      idEdit: null,
    };

    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/perpustakaandigital/api/ambilakun.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var email = this.props.route.params.email;
 
	
    await fetch(this.url + '/?op=pilihprofil&email=' + email)
      .then(response => response.json())
      .then(json => {
		    this.setState({nama: json.data.result[0].nama });
                this.setState({ no_telp: json.data.result[0].no_telp })
                this.setState({ email: json.data.result[0].email })
			       this.setState({ id: json.data.result[0].id })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
		
        this.setState({listData: json.data.result});
		
		 this.props.navigation.replace('Auth');
                try {
                  var user = {
                    Email: this.props.route.params.email,
                    Nama: this.state.nama,
                    No_telp: this.state.no_telp,
					  Id: this.state.id,
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                }
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
	
  render() {
	 var email = this.props.route.params.email;
	    
	 	
    return (
      
				<Text>
			            
			
			
       </Text>
    );
  }
}
