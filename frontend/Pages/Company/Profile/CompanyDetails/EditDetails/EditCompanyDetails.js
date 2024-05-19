import { Alert, StyleSheet, TextInput, View } from "react-native"
import NavigationBar from "../../../Shared/NavBar"
import { StatusBar } from "../../../Shared/StatusBar"
import ReactNativePhoneInput from "react-native-phone-input"
import { useEffect, useState } from "react"
import { useStoredData } from "../../../../../hooks/getStorageData"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import CountryPicker from 'react-native-country-picker-modal';
import clearAllData from "../../../../../state/clearStorage"
import { editCompanyDetails } from "./api"

export function EditCompanyDetails() {
    const [countryName, setCountryName] = useState()
    const [country, setCountry] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [description, setDescription] = useState()
    const [id, setId] = useState()
    const [name, setName] = useState()
    const navigation = useNavigation()

    let data = useStoredData("user_details")

    useEffect(() => {
        if (data) {
            if (data.company) {
                setId(data.company.id)
                setCountry(data.company.country)
                setPhoneNumber(data.company.phoneNumber)
                setName(data.company.name)
                setDescription(data.company.description)
                console.log("ID: ", id)
            }
        }
    }, [data])

    useEffect(() => {
        if (countryName) {
            setCountry(countryName.name)
        }
    }, [countryName])

    const navigateToLogin = () => {
        navigation.navigate("login")
        clearAllData();
    }

    const onPress = async (event) => {
        event.preventDefault();
        try {
            const response = await editCompanyDetails(id, {
                name,
                phoneNumber,
                country,
                description
            })
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Şirket detayları başarıyla güncellendi.",
                [
                    { text: "Ok", onPress: navigateToLogin }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Şirket detayları güncellenirken bir hata meydana geldi.')
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Şirket Adı"
                    style={styles.input}
                />
                <View style={{ flexDirection: "row", alignItems: "center", width: '80%', marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Uyruk: {country} </Text><CountryPicker onSelect={setCountryName} withFlag
                        withFilter withAlphaFilter withCountryNameButton />
                </View>
                <ReactNativePhoneInput style={styles.input} value={phoneNumber} onChangePhoneNumber={setPhoneNumber} />
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Şirketinden bahset..."
                    style={styles.textArea}
                />
                <TouchableOpacity style={styles.createButton} onPress={onPress}>
                    <Text style={styles.createButtonText}>
                        Güncelle
                    </Text>
                </TouchableOpacity>
            </View>
            <NavigationBar />
        </View>
    );
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    createButton: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedText: {
        marginTop: 20,
        fontSize: 18,
    },
    textArea: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        height: 150,
        textAlignVertical: 'top',
    },
    picker: {
        width: '80%',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    }
});
