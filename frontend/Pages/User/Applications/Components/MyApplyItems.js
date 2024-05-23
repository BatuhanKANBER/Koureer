import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

export function MyApplyItems({ item }) {
    const [category, setCategory] = useState()
    const [tittle, setTittle] = useState()
    const [position, setPosition] = useState()
    const [department, setDepartment] = useState()
    const [image, setImage] = useState()
    const [companyName, setCompanyName] = useState()
    const [data, setData] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (item.advertisement) {
            setCategory(item.advertisement.category.name)
            setTittle(item.advertisement.tittle)
            setPosition(item.advertisement.position)
            setDepartment(item.advertisement.department)
            setData(item.advertisement)
        }
        if (item.advertisement.user.company) {
            setCompanyName(item.advertisement.user.company.name)
        }
        console.log("ITEM: ", item)
    }, [item])

    const defaultImage = require('../../../../assets/default-company.png');

    const goToAdvert = (item) => {
        navigation.navigate("AdvertForUser", { item })
    }

    const goToUserProfile = (item) => {
        navigation.navigate("UserForUser", { item })
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => goToUserProfile(data)} style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <Image
                    source={image ? { uri: image } : defaultImage}
                    style={styles.avatar}
                />
                <Text style={styles.companyName}>{companyName}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToAdvert(data)}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.tittle}>{tittle}</Text>
                <Text style={styles.info}>Pozisyon: {position}</Text>
                <Text style={styles.info}>Bölüm: {department}</Text>
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
        fontSize: 16,
        color: "gray"
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
    companyName: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10
    }
});
