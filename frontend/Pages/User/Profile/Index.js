import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import clearAllData from "../../../state/clearStorage";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";

export function UserProfile() {
    const navigation = useNavigation()
    const handleLogout = () => {
        clearAllData();
        navigation.navigate("login")
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>
                User Profil Sayfası
            </Text>
            <NavigationBar />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    }
})