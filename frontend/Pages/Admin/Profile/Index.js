import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { useEffect, useState } from "react";
import { useStoredData } from "../../../hooks/getStorageData";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function AdminProfile() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()
    let data = useStoredData("user_details")
    const navigation = useNavigation()

    useEffect(() => {
        if (data && data.name && data.surname && data.id) {
            setName(data.name)
            setSurname(data.surname)
            setEmail(data.email)
            setIsLoggedIn(data.id)
        }
    }, [data])
    
    const handleEditProfileButton = () => {
        navigation.navigate("EditAdminProfile")
    }

    const defaultImage = require('../../../assets/admin.jpg');

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
                        <TouchableOpacity style={styles.editButton} onPress={handleEditProfileButton}>
                            <Text style={styles.editButtonText}>Düzenle</Text>
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
    }
})