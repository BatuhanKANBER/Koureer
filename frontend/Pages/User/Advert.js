import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { applyToAdvert, getAdvertById } from "./api";
import { StatusBar } from "./Shared/StatusBar";
import NavigationBar from "./Shared/NavBar";
import { useStoredData } from "../../hooks/getStorageData";

export function AdvertForUser({ route }) {
    const navigation = useNavigation()
    const [id, setId] = useState()
    const [tittle, setTittle] = useState()
    const [position, setPosition] = useState()
    const [department, setDepartment] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()
    const [companyName, setCompanyName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [country, setCountry] = useState()
    const [user, setUser] = useState()
    const [userId, setUserId] = useState()
    const [advertisement, setAdvert] = useState()
    let data = useStoredData("user_details")
    const defaultImage = require('../../assets/default-company.png')

    useEffect(() => {
        if (data && data.id) {
            setUserId(data.id)
            console.log("USER ID: ", userId)
        }
    }, [data, userId])

    useEffect(() => {
        if (route.params) {
            setId(route.params.item.id)
            setTittle(route.params.item.tittle)
            setPosition(route.params.item.position)
            setDepartment(route.params.item.department)
            setDescription(route.params.item.description)
            setAdvert(route.params.item)
            if (route.params.item.category) {
                setCategory(route.params.item.category.name)
            }
            if (route.params.item.user) {
                setEmail(route.params.item.user.email)
                setUser(route.params.item.user)
                if (route.params.item.user.company) {
                    setCountry(route.params.item.user.company.country)
                    setCompanyName(route.params.item.user.company.name)
                    setPhoneNumber(route.params.item.user.company.phoneNumber)
                }
            }
        }
    }, [route.params])

    const getAdvert = async () => {
        try {
            if (id) {
                await getAdvertById(id);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdvert();
    }, [getAdvert]);

    const apply = async () => {
        try {
            const response = await applyToAdvert(userId, {
                user,
                advertisement
            });
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "İlana başvuru gerçekleştirildi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
        }
    }

    const navigateToHomePage = () => {
        navigation.navigate("UserHome")
    }

    const goToUserProfile = (item) => {
        navigation.navigate("UserForUser", { item })
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <TouchableOpacity onPress={() => goToUserProfile(advertisement)}>
                    <Image
                        source={image ? { uri: image } : defaultImage}
                        style={styles.avatar}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>{companyName}</Text>
                </TouchableOpacity>
                <ScrollView style={{ flexDirection: "column", alignContent: "flex-start" }}>
                    <Text style={styles.tittle}>{category}</Text>
                    <Text style={styles.subTittle}>{tittle}</Text>
                    <Text style={styles.text}>Pozisyon: {position}</Text>
                    <Text style={styles.text}>Bölüm: {department}</Text>
                    <Text style={styles.text}>Bölge: {country}</Text>
                    <Text style={styles.text}>İletişim:</Text>
                    <Text style={styles.contact}>Telefon Numarası: {phoneNumber}</Text>
                    <Text style={styles.contact}>Email: {email}</Text>
                    <Text style={styles.text}>Detaylar: {description}</Text>
                    <TouchableOpacity style={styles.button} onPress={apply}>
                        <Text style={styles.buttonText}>BAŞVUR</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        paddingBottom: 20,
    },
    elementsContainer: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        margin: 28
    },
    text: {
        fontSize: 18,
        marginBottom: 15
    },
    contact: {
        fontSize: 18,
        marginBottom: 15,
        fontStyle: "italic"
    },
    tittle: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: "bold"
    },
    subTittle: {
        fontSize: 18,
        marginBottom: 15,
        color: "gray"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    button: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10,
        alignItems: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})