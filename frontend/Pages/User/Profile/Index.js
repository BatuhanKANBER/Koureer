import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { useStoredData } from "../../../hooks/getStorageData";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import clearAllData from "../../../state/clearStorage";
import { deleteUser, deleteUserDetails } from "./api";

export function UserProfile() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [userDetails, setUserDetails] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [userDetailsId, setUserDetailsId] = useState()
    const [userId, setUserId] = useState()
    let data = useStoredData("user_details")
    const navigation = useNavigation()

    useEffect(() => {
        if (data) {
            setName(data.name)
            setSurname(data.surname)
            setEmail(data.email)
            setIsLoggedIn(data.id)
            setUserId(data.id)
            if (data.userDetails) {
                setUserDetails(data.userDetails)
                setUserDetailsId(data.userDetails.id)
            }
        }
    }, [data])

    const navigateToLogin = () => {
        clearAllData()
        navigation.navigate('login')
    }

    //USER DELETE START
    const handleUserDelete = async () => {
        try {
            const response = await deleteUser(userId)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kullanıcı başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToLogin }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kullanıcı silinirken bir hata meydana geldi.')
        }
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
                { text: "Evet", onPress: handleUserDelete }
            ],
            { cancelable: false }
        );
    }
    //USER DELETE END

    //USER DETAİLS DELETE START
    const handleUserDetailsDelete = async () => {
        try {
            const response = await deleteUserDetails(userDetailsId)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kullanıcının detayları başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToLogin }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kullanıcı detayları silinirken bir hata meydana geldi.')
        }
    }

    const handleUserDetailsDeleteButton = () => {
        Alert.alert(
            "Kullanıcı Detayları Silme",
            "Kullanıcının detaylarını silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: handleUserDetailsDelete }
            ],
            { cancelable: false }
        );
    }
    //USER DETAİLS DELETE END

    //USER DETAİLS CREATE START
    const handleUserDetailsCreateButton = () => {
        navigation.navigate("CreateUserDetails")
    }
    //USER DETAİLS CREATE END

    //USER DETAİLS EDİT START
    const handleUserDetailsEditButton = () => {
        navigation.navigate("EditUserDetails")

    }
    //USER DETAİLS EDİT END

    //USER EDİT START
    const handleEditButton = () => {
        navigation.navigate("EditProfile")
    }
    //USER EDİT END

    const defaultImage = require('../../../assets/default-user.jpg');

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
                        <TouchableOpacity style={styles.editButton} onPress={handleEditButton}>
                            <Text style={styles.editButtonText}>Güncelle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButton}>
                            <Text style={styles.deleteButtonText}>Sil</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    userDetails &&
                    <View style={{ flexDirection: 'column', alignItems: 'left' }}>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Uyruk: {userDetails.country}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Cinsiyet: {userDetails.gender == true ? <>Erkek</> : <>Kadın</>}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Telefon Numarası: {userDetails.phoneNumber}
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'gray',
                            fontWeight: 'bold',
                            margin: 10
                        }}>
                            Ben Kimim: {userDetails.description}
                        </Text>
                    </View>
                }
                {
                    userDetails ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.editButton} onPress={handleUserDetailsEditButton}>
                                <Text style={styles.editButtonText}>Bilgileri Güncelle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={handleUserDetailsDeleteButton}>
                                <Text style={styles.deleteButtonText}>Bilgileri Sil</Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.createButton} onPress={handleUserDetailsCreateButton}>
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