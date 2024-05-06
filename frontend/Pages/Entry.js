import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./Register/Index";
import { Login } from "./Login/Index";

export function Entry() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}