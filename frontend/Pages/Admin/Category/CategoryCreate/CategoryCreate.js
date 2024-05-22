import { Alert, StyleSheet, TouchableOpacity, View } from "react-native"
import { StatusBar } from "../../Shared/StatusBar"
import NavigationBar from "../../Shared/NavBar"
import { TextInput } from "react-native"
import { createCategory } from "./api"
import { useState } from "react"
import { Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

export function CategoryCreate() {
    const [name, setName] = useState()
    const navigation = useNavigation()

    const navigateToHome = () => {
        navigation.navigate("AdminHome")
    }

    const onPress = async (event) => {
        event.preventDefault();

        try {
            const response = await createCategory({
                name,
            })
            console.log(response.data.message)
            Alert.alert(
                "Bilgi",
                "Kategori başarıyla oluşturuldu.",
                [
                    { text: "Ok", onPress: navigateToHome }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kategori oluşturulurken bir hata meydana geldi.')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ad" />
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: StatusBar.currentHeight || 10,
    },
    elementsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 300,
        width: '100%',
    },
    button: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})