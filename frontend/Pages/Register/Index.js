import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Register() {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Ad" />
                <TextInput style={styles.input} placeholder="Soyad" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} secureTextEntry placeholder="Parola" />
                <TextInput style={styles.input} secureTextEntry placeholder="Parolayı Onayla" />
                <View style={buttonFlex.container}>
                    <Button
                        title="Kayıt Ol"
                        color="#841584"
                    />
                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.label}>Zaten bir hesabınız varsa, </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={[styles.label, styles.underline]}>Giriş Yap</Text>
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
        flexDirection: 'colum',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    }
})