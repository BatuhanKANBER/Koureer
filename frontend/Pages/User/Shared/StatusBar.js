import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import clearAllData from "../../../state/clearStorage";
import { useEffect, useState } from "react";
import { useStoredData } from "../../../hooks/getStorageData";

export function StatusBar() {
    const navigation = useNavigation()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    let data = useStoredData("user_details")

    useEffect(() => {
        if (data && data.name && data.surname) {
            setName(data.name)
            setSurname(data.surname)
        }
    }, [data])

    const handleLogout = () => {
        clearAllData();
        navigation.navigate('login')
    };

    const handleProfileButton = () => {
        navigation.navigate('UserProfile')
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfileButton}>
                <Text style={styles.user}>{name} {surname}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logoutButton: {
        padding: 10,
    },
    profileButton: {
        padding: 10,
    },
    logoutText: {
        fontSize: 16,
        color: 'gray',
    },
    user: {
        fontSize: 16,
        marginRight: 10,
        color: 'gray',
    },
})