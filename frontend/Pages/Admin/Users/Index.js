import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";

export function Users() {
    return (
        <View style={styles.container}>
            <Text>Kullanıcılar</Text>
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