import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { editUser } from "./api";
import NavigationBar from "../../Shared/NavBar";
import { StatusBar } from "../../Shared/StatusBar";
import { useStoredData } from "../../../../hooks/getStorageData";
import clearAllData from "../../../../state/clearStorage";
import { Text } from "react-native";

export function EditProfile() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [id, setId] = useState()
    let data = useStoredData("user_details")
    const navigation = useNavigation()

    useEffect(() => {
        if (data) {
            setId(data.id)
            setName(data.name)
            setSurname(data.surname)
            setEmail(data.email)
            console.log(id)
        }
    }, [data])

    const navigateToLogin = () => {
        clearAllData()
        navigation.navigate('login')
    }

    const onPress = async (event) => {
        event.preventDefault();
        try {
            const response = await editUser(id, {
                name,
                surname,
                email,
            })
            console.log(response.data.message)
            Alert.alert(
                "Bilgi",
                "Kullanıcı bilgileri başarıyla güncellendi.",
                [
                    { text: "Ok", onPress: navigateToLogin }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kullanıcı güncellenirken bir hata meydana geldi.')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.profileContainer}>
                    <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ad" />
                    <TextInput value={surname} onChangeText={setSurname} style={styles.input} placeholder="Soyad" />
                    <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                    <View style={{ height: 20 }} />
                </View>
                <NavigationBar />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: StatusBar.currentHeight || 10,
        paddingBottom: 20,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 200
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

