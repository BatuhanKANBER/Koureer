import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { signin } from "./api";
import { useState } from "react";
import { saveApiResponseToAsyncStorage } from "../../state/storage";
export function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const data = useStoredData('user_details')
    // console.log(typeof (data), data)

    const onPress = async (event) => {
        event.preventDefault();
        try {
            const response = await signin({
                email,
                password
            })
            saveApiResponseToAsyncStorage(response.data)
            console.log(response.data)
            if (response.data.role === 'ADMIN') {
                navigation.navigate("AdminHome")
            }
            if (response.data.role === 'USER') {
                navigation.navigate("UserHome")
            }
            if (response.data.role === 'COMPANY') {
                navigation.navigate("CompanyHome")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
                <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry placeholder="Parola" />
                <View style={buttonFlex.container}>
                    <Button
                        onPress={onPress}
                        title="Giriş Yap"
                        color="#2e8b57"
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