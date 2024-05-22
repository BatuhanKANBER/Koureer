import { FlatList, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "../Shared/StatusBar";
import NavigationBar from "../Shared/NavBar";
import { useCallback, useEffect, useState } from "react";
import { loadCategories } from "./api";
import { Text } from "react-native";
import { CategoryItem } from "./Components/CategoryItem";
import { useNavigation } from "@react-navigation/native";

export function Categories() {
    const navigation = useNavigation()
    const [categoryPage, setCategoryPage] = useState({
        content: [],
        last: false,
        first: false,
        number: 0
    });

    const getCategories = useCallback(async (page = 0) => {
        const response = await loadCategories(page);
        setCategoryPage(response.data);
    }, []);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const navigateToCreateCategoryPage = () => {
        navigation.navigate("CategoryCreate")
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                {
                    categoryPage.numberOfElements > 0 ?
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={styles.header}>Kategori</Text>
                            <FlatList
                                data={categoryPage.content}
                                renderItem={({ item }) => <CategoryItem item={item} />}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={styles.listContent}
                            />
                        </View>

                        :
                        <Text>Herhangi bir kategori bulunamadı.</Text>
                }
            </View>
            <View style={styles.pagination}>
                <TouchableOpacity
                    style={[styles.button, categoryPage.first && styles.disabledButton]}
                    disabled={categoryPage.first}
                    onPress={() => getCategories(categoryPage.number - 1)}
                >
                    <Text style={styles.buttonText}>Önceki</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToCreateCategoryPage}
                >
                    <Text style={styles.buttonText}>Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, categoryPage.last && styles.disabledButton]}
                    disabled={categoryPage.last}
                    onPress={() => getCategories(categoryPage.number + 1)}
                >
                    <Text style={styles.buttonText}>Sonraki</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50 }}>
                <NavigationBar />
            </View>
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
});
