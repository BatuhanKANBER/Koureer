import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createUser } from "./api";

export function Register() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()

    const onPress = async (event) => {
        event.preventDefault();

        try {
            const response = await createUser({
                name,
                surname,
                email,
                password
            })
            console.log(response.data.message)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ad" />
                <TextInput value={surname} onChangeText={setSurname}  style={styles.input} placeholder="Soyad" />
                <TextInput value={email} onChangeText={setEmail}  style={styles.input} placeholder="Email" />
                <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry placeholder="Parola" />
                <Button
                    onPress={onPress}
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

