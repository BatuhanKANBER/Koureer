import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "./Shared/NavBar";
import { StatusBar } from "./Shared/StatusBar";

export function AdminHome() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <Text style={{ fontSize: 30 }}>HOŞGELDİN, YÖNETİCİ.</Text>
            </View>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: StatusBar.currentHeight || 10,
    },
    elementsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 300,
        width: '100%',
    }
})