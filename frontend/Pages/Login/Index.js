import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export function Login() {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} secureTextEntry placeholder="Parola" />
                <View style={buttonFlex.container}>
                    <Button
                        title="Giriş Yap"
                        color="#841584"
                    />
                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.label}>Hesabınız yok mu?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('register')}>
                            <Text style={[styles.label, styles.underline]}> Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    label: {
        fontSize: 16,
        color: 'gray',
    },
    underline: {
        textDecorationLine: 'underline',
    },
})

const buttonFlex = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    }
})