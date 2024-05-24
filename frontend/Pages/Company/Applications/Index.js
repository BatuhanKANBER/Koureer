import { FlatList, StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { loadUsersForAdverts } from "./api";
import { UsersItems } from "./Components/UsersItems";

export function UsersForAdverts({ route }) {
    const [id, setId] = useState()
    const [values, setValues] = useState()
    const [count, setCount] = useState()

    useEffect(() => {
        if (route.params) {
            setId(route.params.id)
            console.log("DATALAR: ", typeof (route.params), route.params)
            console.log("ID: ", id)
        }
    }, [route.params, id])

    const getUsers = async () => {
        try {
            const response = await loadUsersForAdverts(id);
            setValues(response.data)
            setCount(response.data.id)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.elementsContainer}>
                <FlatList
                    data={values}
                    renderItem={({ item }) => <UsersItems item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    ListHeaderComponent={<View style={styles.headerContainer}>
                        <Text style={styles.header}>Avatar</Text>
                        <Text style={styles.header}>Ad Soyad</Text>
                        <Text style={styles.header}>Email</Text>
                    </View>}
                />
            </View>
            <NavigationBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: StatusBar.currentHeight || 10,
    },
    elementsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 28,
        width: '100%',
    },
    listContent: {
        paddingBottom: 20,
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginStart: 10,
        marginEnd: 10
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
