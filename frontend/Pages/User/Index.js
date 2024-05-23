import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavigationBar from "./Shared/NavBar";
import { StatusBar } from "./Shared/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { loadAdverts } from "./api";
import { AdvertItems } from "./Components/AdvertItem";

export function UserHome() {
    const navigation = useNavigation()
    const [id, setId] = useState()
    const [advertPage, setAdvertPage] = useState({
        content: [],
        last: false,
        first: false,
        number: 0
    })

    const getAdverts = useCallback(async (page = 0) => {
        const response = await loadAdverts(page)
        setAdvertPage(response.data)
        console.log(id)
    }, []);

    useEffect(() => {
        getAdverts()
    }, [getAdverts])

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                {
                    advertPage.numberOfElements > 0 ?
                        <View style={{ flexDirection: "column", alignItems: "center", marginBottom: 20}}>
                            <Text>İLANLAR</Text>
                            <FlatList
                                data={advertPage.content}
                                renderItem={({ item }) => <AdvertItems item={item} />}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={styles.listContent}
                            />
                        </View>
                        :
                        <Text>Yayınlanmış herhangi bir ilan bulunamadı.</Text>
                }
            </View>
            <View style={styles.pagination}>
                <TouchableOpacity
                    style={[styles.button, advertPage.first && styles.disabledButton]}
                    disabled={advertPage.first}
                    onPress={() => getAdverts(advertPage.number - 1)}
                >
                    <Text style={styles.buttonText}>Önceki</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, advertPage.last && styles.disabledButton]}
                    disabled={advertPage.last}
                    onPress={() => getAdverts(advertPage.number + 1)}
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