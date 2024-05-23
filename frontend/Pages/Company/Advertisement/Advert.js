import { Alert, StyleSheet, View } from "react-native";
import { StatusBar } from "../Shared/StatusBar";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { deleteAdvert, getAdvertById } from "./api";

export function Advert({ route }) {
    const navigation = useNavigation()
    const [id, setId] = useState()
    const [tittle, setTittle] = useState()
    const [position, setPosition] = useState()
    const [department, setDepartment] = useState()
    const [description, setDescription] = useState()
    const [item, setItem] = useState()

    useEffect(() => {
        if (route.params) {
            setId(route.params.item.id)
            setTittle(route.params.item.tittle)
            setPosition(route.params.item.position)
            setDepartment(route.params.item.department)
            setDescription(route.params.item.description)
            setItem(route.params.item)
        }
    }, [route.params])

    const getAdvert = async () => {
        try {
            const response = await getAdvertById(id);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdvert();
    }, [getAdvert]);

    const navigateToHomePage = () => {
        navigation.navigate("CompanyHome")
    }

    //ADVERT DELETE START
    const handleAdvertDelete = async () => {
        try {
            const response = await deleteAdvert(id)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "İlan başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('İlan silinirken bir hata meydana geldi.')
        }
    }

    const handleDeleteButton = () => {
        Alert.alert(
            "İlan Silme",
            "İlanı silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: handleAdvertDelete }
            ],
            { cancelable: false }
        );
    }
    //ADVERT DELETE END

    const navigateToEditPageForAdvert = (item) => {
        navigation.navigate("AdvertEdit", item)
    }

    const navigateToApplycatedUsersPage = (item) => {
        navigation.navigate("UsersForAdverts", item)
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <View style={{ flexDirection: "column", alignContent: "flex-start" }}>
                    <Text style={styles.text}>İlan Başlığı: {tittle}</Text>
                    <Text style={styles.text}>Pozisyon: {position}</Text>
                    <Text style={styles.text}>Bölüm: {department}</Text>
                    <Text style={styles.text}>Açıklama: {description}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.editButton} onPress={() => navigateToEditPageForAdvert(item)}>
                            <Text style={styles.editButtonText}>Güncelle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButton}>
                            <Text style={styles.deleteButtonText}>Sil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigateToApplycatedUsersPage(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Başvuruları Görüntüle</Text>
                </TouchableOpacity>
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
        marginTop: 100
    },
    text: {
        fontSize: 18,
        marginBottom: 15
    },
    deleteButton: {
        backgroundColor: 'darkred',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    editButton: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        margin: 10,
        alignItems: "center",
        width: "50%"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})