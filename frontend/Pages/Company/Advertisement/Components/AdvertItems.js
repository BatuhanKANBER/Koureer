import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function AdvertItems({ item }) {
    const [category, setCategory] = useState()
    const navigation = useNavigation()
    useEffect(() => {
        if (item.category) {
            setCategory(item.category.name)
            console.log(item)
        }
    }, [item])


    const goToAdvert = (item) => {
        navigation.navigate("Advert", { item })
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => goToAdvert(item)}>
                <Text style={styles.tittle}>{item.tittle}</Text>
                <Text style={styles.info}>Pozisyon: {item.position}</Text>
                <Text style={styles.info}>Bölüm: {item.department}</Text>
                <Text style={styles.description}>Kategori: {category}</Text>
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
    card: {
        width: '90%',
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
        marginBottom: 8,
    },
    info: {
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
        marginTop: 8,
        color: '#555',
    },
    category: {
        fontSize: 16,
        marginTop: 8,
        color: 'blue',
    },
});
