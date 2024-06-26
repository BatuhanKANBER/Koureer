import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

    const logout = () => {
        clearAllData();
        navigation.navigate('login')
    };

    const handleLogout = () => {
        Alert.alert(
            "Çıkış Yap",
            "Çıkış yapmak istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: logout }
            ],
            { cancelable: false }
        );
    }

    const handleProfileButton = () => {
        navigation.navigate('AdminProfile')
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfileButton}>
                <Text style={styles.user}>{name} {surname}</Text>
            </TouchableOpacity>
            <Text style={styles.logo}>
                KOUREER
            </Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Çıkış Yap</Text>
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
    logo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2e8b57"
    }
})