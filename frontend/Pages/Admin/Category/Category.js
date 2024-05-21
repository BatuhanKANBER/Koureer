import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { deleteCategory, getCategoryById } from "./api"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { StatusBar } from "../Shared/StatusBar"
import NavigationBar from "../Shared/NavBar"

export function Category({ route }) {
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [item, setItem] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (route.params) {
            setId(route.params.item.id)
            setItem(route.params.item)
        }
    }, [route.params])

    const getCategory = async () => {
        try {
            const response = await getCategoryById(id);
            setName(response.data.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory();
        console.log(item)
    }, [getCategory]);

    const navigateToHomePage = () => {
        navigation.navigate("AdminHome")
    }

    //CATEGORY DELETE START
    const handleUserDelete = async () => {
        try {
            const response = await deleteCategory(id)
            console.log(response.data)
            Alert.alert(
                "Bilgi",
                "Kategori başarıyla silindi.",
                [
                    { text: "Ok", onPress: navigateToHomePage }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('Kategori silinirken bir hata meydana geldi.')
        }
    }

    const handleDeleteButton = () => {
        Alert.alert(
            "Kategori Silme",
            "Kategoriyi silmek istediğinizden emin misiniz?",
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                { text: "Evet", onPress: handleUserDelete }
            ],
            { cancelable: false }
        );
    }
    //CATEGORY DELETE END

    const navigateToEditPageForCategory = (item) => {
        navigation.navigate("CategoryEdit", item)
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.editButton} onPress={() => navigateToEditPageForCategory(item)}>
                            <Text style={styles.editButtonText}>Güncelle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButton}>
                            <Text style={styles.deleteButtonText}>Sil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
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
    }
})