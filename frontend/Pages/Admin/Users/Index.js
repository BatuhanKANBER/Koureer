import { FlatList, StyleSheet, Text, View } from "react-native";
import NavigationBar from "../Shared/NavBar";
import { StatusBar } from "../Shared/StatusBar";
import { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { loadUsers } from "./api";
import { UserItem } from "./Components/UserItems";

export function Users() {
    const [userPage, setUserPage] = useState({
        content: [],
        last: false,
        first: false,
        number: 0
    });

    const getUsers = useCallback(async (page = 0) => {
        const response = await loadUsers(page);
        setUserPage(response.data);
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.profileContainer}>
                {
                    userPage.numberOfElements > 1 ?
                        <FlatList
                            data={userPage.content}
                            renderItem={({ item }) => <UserItem item={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.listContent}
                            ListHeaderComponent={<View style={styles.headerContainer}>
                                <Text style={styles.header}>Avatar</Text>
                                <Text style={styles.header}>Ad Soyad</Text>
                                <Text style={styles.header}>Email</Text>
                                <Text style={styles.header}>Rol</Text>
                            </View>}
                        /> :
                        <Text>Herhangi bir kullanıcı bulunamadı.</Text>
                }
            </View>
            <View style={styles.pagination}>
                <TouchableOpacity
                    style={[styles.button, userPage.first && styles.disabledButton]}
                    disabled={userPage.first}
                    onPress={() => getUsers(userPage.number - 1)}
                >
                    <Text style={styles.buttonText}>Önceki</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, userPage.last && styles.disabledButton]}
                    disabled={userPage.last}
                    onPress={() => getUsers(userPage.number + 1)}
                >
                    <Text style={styles.buttonText}>Sonraki</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50 }}>
                <NavigationBar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: StatusBar.currentHeight || 10,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 28,
        width: '100%',
    },
    listContent: {
        paddingBottom: 20,
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
