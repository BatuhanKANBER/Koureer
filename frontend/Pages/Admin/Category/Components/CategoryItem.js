import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export function CategoryItem({ item }) {
    const navigation = useNavigation()

    const goToCategory = (item) => {
        navigation.navigate("Category", { item })
    }
    return (
        <View>
            <TouchableOpacity style={styles.container}  onPress={() => goToCategory(item)}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 28,
        alignItems: "center",
        alignContent: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "gray"
    }
})