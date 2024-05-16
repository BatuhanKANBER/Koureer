import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";

export function Companies() {
    return (
        <View style={styles.container}>
            <Text>Şirketler</Text>
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