import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { editAdvert } from "./api";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { getAllCategories } from "./CreateAdvert/api";
import RNPickerSelect from 'react-native-picker-select';


export function AdvertEdit({ route }) {
    const [tittle, setTittle] = useState()
    const [position, setPosition] = useState()
    const [department, setDepartment] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (route.params) {
            setId(route.params.id)
            setTittle(route.params.tittle)
            setPosition(route.params.position)
            setDepartment(route.params.department)
            setDescription(route.params.description)
            console.log("Datalar: ",typeof(route.params), route.params)
        }
    }, [route.params])

    const navigateToHome = () => {
        navigation.navigate("CompanyHome")
    }

    const onPress = async (event) => {
        event.preventDefault();
        try {
            const response = await editAdvert(id, {
                tittle,
                position,
                department,
                description,
                category
            })
            console.log(response.data.message)
            Alert.alert(
                "Bilgi",
                "İlan bilgileri başarıyla güncellendi.",
                [
                    { text: "Ok", onPress: navigateToHome }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error)
            alert('İlan güncellenirken bir hata meydana geldi.')
        }
    }

    //GET CATEGORIES START
    const getCategories = async () => {
        try {
            const response = await getAllCategories();
            const formattedData = response.data.map(item => ({
                label: item.name,
                value: item.id,
            }));
            setCategories(formattedData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    }, [getCategories]);
    //GET CATEGORIES END

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setCategory({ id: value })}
                    items={categories}
                    style={pickerSelectStyles}
                    placeholder={{ label: 'Kategori seç', value: null }}
                />
                <TextInput value={tittle} onChangeText={setTittle} style={styles.input} placeholder="Başlık" />
                <TextInput value={position} onChangeText={setPosition} style={styles.input} placeholder="Pozisyon" />
                <TextInput value={department} onChangeText={setDepartment} style={styles.input} placeholder="Bölüm" />
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Açıklama..."
                    style={styles.textArea}
                />
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Kaydet</Text>
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
    },
    elementsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        width: '100%',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#2e8b57',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10
    },
    disabledButton: {
        backgroundColor: '#a9a9a9',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContent: {
        paddingVertical: 10,
    },
    headerContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textArea: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        height: 150,
        textAlignVertical: 'top',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
});