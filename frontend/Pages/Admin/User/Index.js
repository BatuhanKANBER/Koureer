import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "../Shared/StatusBar";
import NavigationBar from "../Shared/NavBar";
import { useEffect, useState } from "react";
import { getUserById } from "./api";
import { useNavigation } from "@react-navigation/native";
import { deleteUser, deleteUserDetails } from "../../User/Profile/api";
import { deleteCompanyDetails } from "../../Company/Profile/api";



export function User({ route }) {
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [userDetails, setUserDetails] = useState()
    const [companyDetails, setCompany] = useState()
    const [userDetailsId, setUserDetailsId] = useState()
    const [companyDetailsId, setCompanyDetailsId] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (userDetails) {
            setUserDetailsId(userDetails.id)
        }
    }, [userDetails])

    useEffect(() => {
        if (companyDetails) {
            setCompanyDetailsId(companyDetails.id)
        }
    }, [companyDetails])

    useEffect(() => {
        if (route.params) {
            setId(route.params.item.id)
        }
    }, [route.params])

    const getUser = async () => {
        try {
            const response = await getUserById(id);
            setName(response.data.name)
            setSurname(response.data.surname)
            setEmail(response.data.email)
            setUserDetails(response.data.userDetails)
            setCompany(response.data.company)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, [getUser]);

    const navigateToHomePage = () => {
        navigation.navigate("AdminHome")
    }

    //USER DELETE START
    const handleUserDelete = async () => {
        try {
            const response = await deleteUser(id)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kullanıcı başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
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

    //COMPANY DETAİLS DELETE START
    const handleCompanyDelete = async () => {
        try {
            const response = await deleteCompanyDetails(companyDetailsId)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kullanıcının detayları başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kullanıcı detayları silinirken bir hata meydana geldi.')
        }
    }

    const handleCompanyDeleteButton = () => {
        Alert.alert(
            "Kullanıcı Detayları Silme",
            "Kullanıcının detaylarını silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: handleCompanyDelete }
            ],
            { cancelable: false }
        );
    }
    //COMPANY DETAİLS DELETE END

    //USER DETAİLS DELETE START
    const handleUserDetailsDelete = async () => {
        try {
            const response = await deleteUserDetails(userDetailsId)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kullanıcının detayları başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
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

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButton}>
                            <Text style={styles.deleteButtonText}>Sil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                    userDetails &&
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleUserDetailsDeleteButton}>
                            <Text style={styles.deleteButtonText}>Bilgileri Sil</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    companyDetails &&
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleCompanyDeleteButton}>
                            <Text style={styles.deleteButtonText}>Bilgileri Sil</Text>
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
        marginTop: 100
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
    }
})