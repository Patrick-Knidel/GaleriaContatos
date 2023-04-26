import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function ListaFavoritos(){
    return (
        <View style={styles.container}>
            <View style={styles.tituloPosicao}>
                <Text style={styles.titulo}>Favoritos</Text>
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
    barraBusca: {
        width: '80%',
        height: 30,
        backgroundColor: '#7BFFE4',
        alignSelf: 'center',
        marginTop: 35,
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