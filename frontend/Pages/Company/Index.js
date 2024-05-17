import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "./Shared/NavBar";
import { StatusBar } from "./Shared/StatusBar";

export function CompanyHome() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>Şirket Ana Sayfası</Text>
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