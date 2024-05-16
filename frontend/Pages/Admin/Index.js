import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "./Shared/NavBar";

export function AdminHome() {
    return (
        <View style={styles.container}>
            <Text>Admin Ana Sayfası</Text>
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