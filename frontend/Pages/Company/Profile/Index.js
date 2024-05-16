import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import clearAllData from "../../../state/clearStorage";
import NavigationBar from "../Shared/NavBar";
import { useNavigation } from "@react-navigation/native";

export function CompanyProfile() {
    const navigation = useNavigation()
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
                Şirket Profil Sayfası
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