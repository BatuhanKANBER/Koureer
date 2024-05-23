import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function UsersItems({ item }) {
    const [image, setImage] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (item) {
            console.log("ITEMLAR: ", item)
        }
    }, [item])

    const defaultImage = require('../../../../assets/default-user.jpg');

    const goToUserProfile = (item) => {
        navigation.navigate("UserForCompany", { item })
    }

    return (
        <TouchableOpacity onPress={() => goToUserProfile(item)} style={styles.container}>
            <Image
                source={image ? { uri: image } :
                    defaultImage
                }
                style={styles.avatar}
            />
            <Text style={styles.text}>  {item.name} {item.surname} </Text>
            <Text style={styles.text}> | {item.email} </Text>
        </TouchableOpacity>

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
    }
});
