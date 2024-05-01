import { StyleSheet, Text, View } from "react-native";

export function UserHome() {
    return (
        <View style={styles.container}>
            <Text>Kullanıcı Sayfası</Text>
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