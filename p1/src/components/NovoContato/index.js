import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NovoContato({navigation}) {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState(['']);
  const [email, setEmail] = useState(['']);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  },[]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
      setFoto(result.assets[0].uri);
    }
  };

  function nomeChanged(nome){
    setNome(nome);
  }
  function sobrenomeChanged(sobrenome){
    setSobrenome(sobrenome);
  }
  function enderecoChanged(endereco){
    setEndereco(endereco);
  }
  function telefoneChanged(telefone){
    setTelefone(telefone);
  }
  function emailChanged(email){
    setEmail(email);
  }
  async function btnSalvar(){
    const item = {id: new Date().getTime(), foto, nome, sobrenome, endereco,telefone, email};
    let items = [];
    const response = await AsyncStorage.getItem('items');

    if(response) items = JSON.parse(response);
    items.push(item);

    console.log(items);

    await AsyncStorage.setItem('items', JSON.stringify(items));

  }
  async function btnDeletar(){
    await AsyncStorage.removeItem('items');
  }

  return (
    <View style={styles.container}>
      <View style={styles.tituloPosicao}>
        <Text style={styles.titulo}>Novo Contato</Text>
      </View> 

      <View style={styles.setaPosicao}>
        <Text 
        onPress={() => navigation.navigate('Contatos')}  
        style={styles.seta}      
        >
          <Image source={require('p1/image/seta-esquerda.png')} />
        </Text>
      </View>

      <TouchableOpacity
       style={styles.imagemPosicao}
       onPress={pickImage}  
      >
        {foto && <Image source={{ uri: foto }} style={{ width: 150, height: 142, borderRadius: 70 }} />}

        <Image 
        source={require('p1/image/camera-fotografica.png')}
        style={styles.imagemBtn} 
        /> 

      </TouchableOpacity>
      
      <View style={styles.formPosicao}>
        <TextInput/>

        <Text style={styles.labelForm}>Nome</Text>
        <TextInput 
          style={styles.inputForm}
          placeholder="Informe o nome do contato"
          clearButtonMode="always"
          onChangeText={nomeChanged}
        />

        <Text style={styles.labelForm}>Sobrenome</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="Informe o sobrenome do contato"
          clearButtonMode="always"
          onChangeText={sobrenomeChanged}
        />

        <Text style={styles.labelForm}>Endereço</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="Informe o endereco do contato"
          clearButtonMode="always"
          onChangeText={enderecoChanged}
        />
        <View>
          <Text style={styles.labelForm}>Telefone</Text>
            <TextInput
            style={styles.inputForm}
            placeholder="Informe o telefone do contato"
            clearButtonMode="always"
            onChangeText={telefoneChanged}
          />

          <Text 
            style={styles.adicionarCampo}               
          >
          <Image 
            source={require('p1/image/mais.png')}
          />
          </Text>
          
        </View>

        <View>
          <Text style={styles.labelForm}>Email</Text>

            <TextInput
            style={styles.inputForm}
            placeholder="Informe o email do contato"
            clearButtonMode="always"
            onChangeText={emailChanged}
          />

          <Text 
            style={styles.adicionarCampo}               
          >
          <Image 
            source={require('p1/image/mais.png')}
          />
          </Text>
          
        </View>

      </View>
        <TouchableOpacity 
          style={styles.salvarPosicao}
          onPress={btnSalvar}
        >
          <Text
            style={styles.salvarBtn}
          >
          Salvar
          </Text>
        </TouchableOpacity>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AF8B',
    display: 'flex',
  },
  tituloPosicao: {
    alignItems: 'center',
  },
  titulo: {
    color: '#FFF',
    fontSize: 24,
    backgroundColor: '#0B866C',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 200,
    height: 35,
    borderRadius: 33,
    marginTop: 20,
    fontWeight: 'bold',

  },
  setaPosicao: {
    marginLeft: 7,
    marginTop: -42
  },
  seta: {
    width: 28,
    height: 44,        
    borderRadius: 21.5,
  },
  imagemPosicao: {
    width: 150,
    height: 142,
    backgroundColor: '#7BFFE4',
    borderRadius: 70,
    alignSelf: 'center',
    marginTop: 20
  },
  imagemBtn: {
    alignSelf: 'center',
  },
  formPosicao: {
    marginLeft: 17,
    marginTop: -20
  },
  labelForm: {
    fontSize: 22,
    color: "#FFF",
  },
  inputForm: {
    fontSize: 16,
    backgroundColor: "#0B866C",
    paddingLeft: 5,
    width: 350,
    marginBottom: 5,
  },
  salvarPosicao: {
    alignSelf: 'center',
    width: 128,
    height: 35,
    borderRadius: 60,
    backgroundColor: "#0B866C",
    marginTop: 50,
  },
  salvarBtn: {
    color: "#FFF",
    fontSize: 24,
    textAlign: 'center',
  },
  adicionarCampo: {
    marginLeft: 355,
    marginTop: -32,
    marginBottom: 10
  },


})