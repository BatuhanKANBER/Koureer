import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { useEffect, useState } from "react";
import { useStoredData } from "../../../hooks/getStorageData";
import { Image } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import clearAllData from "../../../state/clearStorage";

export function CompanyProfile() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [companyDetails, setCompanyDetails] = useState()
    const navigation = useNavigation()
    let data = useStoredData("user_details")

    useEffect(() => {
        if (data && data.id) {
            setName(data.name)
            setSurname(data.surname)
            setEmail(data.email)
            setIsLoggedIn(data.id)
            setCompanyDetails(data.company)
        }
    }, [data])

    const deleteCompanyDetails = () => {
        setCompanyDetails(null)
        navigation.navigate('CompanyProfile')
    }

    const handleCompanyDetailsDeleteButton = () => {
        Alert.alert(
            "Şirket Detayları Silme",
            "Şirketin detaylarını silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: deleteCompanyDetails }
            ],
            { cancelable: false }
        );
    }

    const deleteUser = () => {
        clearAllData()
        navigation.navigate('login')
    }

    const handleDeleteButton = () => {
        Alert.alert(
            "Kullanıcı Silme",
            "Kullanıcıyı silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: deleteUser }
            ],
            { cancelable: false }
        );
    }

    const handleCompanyDetailsCreateButton = () => {
        navigation.navigate("CreateCompanyDetails")
    }

    const defaultImage = require('../../../assets/default-company.png');

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.profileContainer}>
                <Image
                    source={image ? { uri: image } : defaultImage}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{name} {surname}</Text>
                <Text style={styles.email}>{email}</Text>
                {isLoggedIn > 0 &&
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>Düzenle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButton}>
                            <Text style={styles.deleteButtonText}>Sil</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    companyDetails &&
                    <View style={{ flexDirection: 'column', alignItems: 'left' }}>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Şirket Adı: {companyDetails.name}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Uyruk: {companyDetails.country}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Telefon Numarası: {companyDetails.phoneNumber}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Şirket Hakkında: {companyDetails.description}
                        </Text>
                    </View>
                }
                {
                    companyDetails ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editButtonText}>Bilgileri Güncelle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={handleCompanyDetailsDeleteButton}>
                                <Text style={styles.deleteButtonText}>Bilgileri Sil</Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.createButton} onPress={handleCompanyDetailsCreateButton}>
                                <Text style={styles.createButtonText}>Bilgi Ekle</Text>
                            </TouchableOpacity>
                        </View>
                }
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
        paddingBottom: 20,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 28
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    email: {
        fontSize: 18,
        color: 'gray'
    },
    editButton: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    editButton: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    deleteButton: {
        backgroundColor: 'darkred',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    createButton: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})