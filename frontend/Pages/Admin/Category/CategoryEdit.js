import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { editCategory } from "./api";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { TouchableOpacity } from "react-native";


export function CategoryEdit({ route }) {
    const [name, setName] = useState()
    const [id, setId] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (route.params) {
            setId(route.params.id)
            setName(route.params.name)
        }
    }, [route.params])

    const navigateToHome = () => {
        navigation.navigate("AdminHome")
    }

    const onPress = async (event) => {
        event.preventDefault();
        try {
            const response = await editCategory(id, {
                name
            })
            console.log(response.data.message)
            Alert.alert(
                "Bilgi",
                "Kategori bilgileri başarıyla güncellendi.",
                [
                    { text: "Ok", onPress: navigateToHome }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kategori güncellenirken bir hata meydana geldi.')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.elementsContainer}>
                    <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Ad" />
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Güncelle</Text>
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
    elementsContainer: {
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
        marginTop: 10
    }
})

