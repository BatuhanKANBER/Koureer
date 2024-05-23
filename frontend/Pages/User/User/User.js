import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "../Shared/StatusBar";
import NavigationBar from "../Shared/NavBar";
import { useEffect, useState } from "react";
import { getUserById } from "./api";

export function UserForUser({ route }) {
    const [id, setId] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [userDetails, setUserDetails] = useState()
    const [companyDetails, setCompany] = useState()
    const [role, setRole] = useState()

    useEffect(() => {
        if (route.params) {
            setId(route.params.item.user.id)
            setRole(route.params.item.user.role)
        }
    }, [route.params])

    const getUser = async () => {
        try {
            const response = await getUserById(id);
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

    const defaultUserImage = require('../../../assets/default-user.jpg');
    const defaultCompanyImage = require('../../../assets/default-company.png');

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.profileContainer}>
                <Image
                    source={image ? { uri: image } :
                        role === "COMPANY" ? defaultCompanyImage :
                            defaultUserImage
                    }
                    style={styles.avatar}
                />
                <Text style={styles.email}>{email}</Text>

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