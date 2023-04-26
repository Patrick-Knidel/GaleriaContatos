import { View, Text, StyleSheet, Image, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

export default function ListaContatos({navigation}) {
    const [items, setItems] = useState([]);
    const [imagem, setImagem] = useState(null);

    async function getItems() {
      return AsyncStorage.getItem('items')
        .then(response => {
          if (response) 
            return Promise.resolve(JSON.parse(response));
          else 
            return Promise.resolve([]);
        })
    }

    useEffect(() => {
      getItems().then(items => setItems(items));
    },[]);

    const exibirImagem = async () => {
        try {
          const imagemBase64 = await AsyncStorage.getItem('foto');
          if (imagemBase64 !== null) {
            // Atribua a imagem a uma variável
            const imagem = `data:image/png;base64,${imagemBase64}`;
            console.log('Imagem recuperada com sucesso!');
            // Exiba a imagem na tela
            return (
              <Image
                source={{ uri: imagem }}
                style={{ width: 200, height: 200 }}
              />
            );
          } else {
            console.log('Nenhuma imagem encontrada.');
          }
        } catch (error) {
          console.log('Erro ao exibir imagem: ', error);
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.tituloPosicao}>
                <Text style={styles.titulo}>Contatos</Text>
            </View>
            
            <View style={styles.adicionarPosicao}>
                <View style={styles.adicionarFundo} >
                    <Text 
                    onPress={() => navigation.navigate('NovoContato')}
                    style={styles.imagemBtn}               
                    >
                        <Image 
                        source={require('p1/image/adicionar-contato.png')}
                        
                        />
                    </Text>
                </View>                
            </View>

            <View style={styles.barraBusca}>
                <TextInput
                    clearButtonMode="always"
                    style={styles.conteudoBusca}
                />
                <Image 
                    source={require('p1/image/lupa.png')}  
                    style={styles.imagemBusca}                      
                />
            </View>

            <ScrollView>
                <FlatList
                    keyExtractor={(item) => item.id} 
                    data={items}
                    renderItem={({item}) => (                    
                        <View style={styles.listaContatos}>
                            <Text
                                onPress={() => navigation.navigate("VisualizarContato",
                                {id: item.id, nome: item.nome, sobrenome: item.sobrenome, endereco: item.endereco, telefone: item.telefone, email: item.email, foto: item.foto})} 
                                style={styles.textoContatos}                   
                            >
                            {imagem && <Image source={{ uri: imagem }} />}
                            {item.nome}         {item.telefone}
                            </Text>
                        </View>
                        
                    )}
                    
                />
            </ScrollView>            

        </View>  
    )    
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
    adicionarPosicao: {
        marginLeft: 330,
        marginTop: -39,        
    },
    adicionarFundo: {
        width: 43,
        height: 44,
        borderRadius: 21.5,
        backgroundColor: '#7BFFE4',   
    },
    imagemBtn: {
        alignSelf: 'center',
        marginTop: -7
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#00AF8B'
    },
    listaContatos: {
        width: '95%',
        backgroundColor: '#0B866C',
        marginLeft: 10,
        borderRadius: 15,
        height: 33,
        marginTop: 5,
        
    },
    textoContatos: {
        fontSize: 20,
        marginLeft: 80,
        color: '#FFFFFF',
        marginTop: 3, 
    },
    barraBusca: {
        width: '80%',
        height: 30,
        backgroundColor: '#7BFFE4',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 25,
    },
    conteudoBusca: {
        fontSize: 16,
        textAlignVertical: 'center',
    },
    imagemBusca: {
        marginTop: -29,
        marginLeft: 302
    }
  })