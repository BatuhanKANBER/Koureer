import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import clearAllData from "../../../state/clearStorage";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../Shared/NavBar";

export function AdminProfile() {
    const navigation = useNavigation();

    const handleLogout = () => {
        clearAllData();
        navigation.navigate('login')
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <Text>
                Admin Profil Sayfası
            </Text>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})