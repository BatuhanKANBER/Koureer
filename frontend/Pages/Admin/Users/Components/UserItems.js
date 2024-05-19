import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

export function UserItem({ item }) {
    const [image, setImage] = useState()
    const defaultImage = require('../../../../assets/default-user.jpg');
    const navigation = useNavigation()

    const goToUserProfile = (item) => {
        navigation.navigate("User", { item })
    }
    return (
        <View>
            {
                item.role !== "ADMIN" &&
                <TouchableOpacity style={styles.container} onPress={() => goToUserProfile(item)}>
                    <Image
                        source={image ? { uri: image } : defaultImage}
                        style={styles.avatar}
                    />
                    <Text style={styles.text}>  {item.name} {item.surname} </Text>
                    <Text style={styles.text}> | {item.email} </Text>
                    <Text style={styles.text}> | {item.role} </Text>
                </TouchableOpacity>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 28,
        alignItems: "center",
        alignContent: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "gray"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
})