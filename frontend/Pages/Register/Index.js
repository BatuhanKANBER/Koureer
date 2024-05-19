import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createUser } from "./api";
import Checkbox from "expo-checkbox";

export function Register() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const [role, setRole] = useState('USER');
    const navigation = useNavigation()

    const handleCheckBoxChange = (newValue) => {
        setIsChecked(newValue);
        if (newValue) {
            setRole('COMPANY');
        } else {
            setRole('USER');
        }
    };

    const onPress = async (event) => {
        event.preventDefault();

        try {
            const response = await createUser({
                name,
                surname,
                email,
                password,
                role
            })
            console.log(response.data.message)
            alert('Kullanıcı oluşturuldu.')
        } catch (error) {
            console.log(error)
            alert('Kullanıcı oluşturulurken bir hata meydana geldi.')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ad" />
                <TextInput value={surname} onChangeText={setSurname} style={styles.input} placeholder="Soyad" />
                <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
                <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry placeholder="Parola" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Checkbox
                        color='#2e8b57'
                        value={isChecked}
                        onValueChange={handleCheckBoxChange}
                    />
                    <Text style={styles.label}> Şirket hesabı oluşturmak  için seçiniz.</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
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
    button: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

