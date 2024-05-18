import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";

export function Users() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>Kullanıcılar</Text>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    }
})