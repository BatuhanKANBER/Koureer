import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function AdvertItems({ item }) {
    const [category, setCategory] = useState()
    const [image, setImage] = useState()
    const [companyName, setCompanyName] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (item.category) {
            setCategory(item.category.name)
            console.log(item)
        }
        if (item.user.company) {
            setCompanyName(item.user.company.name)
        }
    }, [item, companyName])


    const goToAdvert = (item) => {
        navigation.navigate("AdvertForUser", { item })
    }

    const goToUserProfile = (item) => {
        navigation.navigate("UserForUser", { item })
    }

    const defaultImage = require('../../../assets/default-company.png');

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => goToUserProfile(item)} style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <Image
                    source={image ? { uri: image } : defaultImage}
                    style={styles.avatar}
                />
                <Text style={styles.tittle}>{companyName}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToAdvert(item)}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.info}>{item.tittle}</Text>
                <Text style={styles.info}>Pozisyon: {item.position}</Text>
                <Text style={styles.info}>Bölüm: {item.department}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
    ,
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    info: {
        fontSize: 16,
        marginBottom: 4,
    },
    category: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: "bold"
    },
});
