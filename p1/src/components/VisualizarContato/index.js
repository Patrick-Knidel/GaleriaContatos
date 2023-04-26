import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from "react-native";

export default function VisualizarContato({navigation,route}){
    
    return (
        <View style={styles.container}>

            <View style={styles.tituloPosicao}>
                <Text style={styles.titulo}>Visualizar Contato</Text>
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
                >
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
                placeholder={route.params?.nome}
                />

                <Text style={styles.labelForm}>Sobrenome</Text>
                <TextInput
                style={styles.inputForm}
                placeholder={route.params?.sobrenome}
                />

                <Text style={styles.labelForm}>Endereço</Text>
                <TextInput
                style={styles.inputForm}
                placeholder={route.params?.endereco}
                />

                <Text style={styles.labelForm}>Telefone</Text>
                <TextInput
                style={styles.inputForm}
                placeholder={route.params?.telefone}
                />

                <Text style={styles.labelForm}>Email</Text>
                <TextInput
                style={styles.inputForm}
                placeholder={route.params?.email}
                />
            </View>           

            <TouchableOpacity 
                style={styles.excluirPosicao}
            >
                <Text
                style={styles.excluirBtn}
                >
                Excluir
                </Text>
            </TouchableOpacity>            

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
        width: 250,
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
      excluirPosicao: {
        alignSelf: 'center',
        width: 128,
        height: 35,
        borderRadius: 60,
        backgroundColor: "#0B866C",
        marginTop: 230,
      },
      excluirBtn: {
        color: "#FFF",
        fontSize: 24,
        textAlign: 'center',
      },
      adicionarCampo: {
        backgroundColor: "#FFF",
      }  
    
  })