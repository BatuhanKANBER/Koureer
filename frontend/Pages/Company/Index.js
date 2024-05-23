import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationBar from "./Shared/NavBar";
import { StatusBar } from "./Shared/StatusBar";
import { useStoredData } from "../../hooks/getStorageData";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function CompanyHome() {
    const data = useStoredData("user_details")
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        if (data) {
            setName(data.name)
            setSurname(data.surname)
        }
    }, [data])
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Hoşgeldiniz sayın, {name} {surname}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('OurAdvertisements')}>
                    <Text style={[styles.label, styles.underline]}>ilanlarım</Text>
                </TouchableOpacity>
                <Text style={styles.label}>sayfasına giderek ilan oluşturabilir,
                    ilanlarınızı kontrol edebilir veya başvuruları görüntüleyebilirsiniz.
                    Sağlıklı günler dileriz. :D
                </Text>
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
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 250,
        width: '100%',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    label: {
        fontSize: 16,
        color: 'gray',
    }
})