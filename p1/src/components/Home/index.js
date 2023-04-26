import { View, Text, StyleSheet, Image } from "react-native";

export default function Home(){
    return (
        <View>
            <View style={[styles.quadrado, styles.sombra]}>

            </View>
            <View>
                              
            </View>
            <View style={styles.content}>
                <Text style={styles.titulo}>Bem Vindo !</Text>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({    
    quadrado: {
        width: 325,
        height: 325,        
        alignSelf: 'center',
        marginTop: 150,
        transform: [{rotate: '45.98deg'}],
        borderColor: 'black',
        borderWidth: 1
    },
    sombra: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    logo: {
        width: 295,
        height: 270,
        alignSelf: 'center',
        marginTop: -315,
        borderRadius: 86
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 260,
    },
    titulo: {
        color: '#FFF',
        fontSize: 20,
        backgroundColor: '#0B866C',
        height: 24,
        width: 412,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
    
})