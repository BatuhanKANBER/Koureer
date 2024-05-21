import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { Categories } from "./CategoryDropdawn/Index";

export function OurAdvertisements() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>
                <Categories />
            </Text>
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