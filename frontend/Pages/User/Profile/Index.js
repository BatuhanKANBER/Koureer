import { StyleSheet, Text, View } from "react-native";

export function UserProfile() {
    return (
        <View style={styles.container}>
            <Text>Profilim</Text>
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