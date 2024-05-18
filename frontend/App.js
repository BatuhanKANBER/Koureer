import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Pages/Login/Index';
import { Register } from './Pages/Register/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserHome } from './Pages/User/Index';
import { UserProfile } from './Pages/User/Profile/Index';
import { JobApplications } from './Pages/User/Applications/Index';
import { CompanyHome } from './Pages/Company/Index';
import { OurApplications } from './Pages/Company/Applications/Index';
import { CompanyProfile } from './Pages/Company/Profile/Index';
import { AdminHome } from './Pages/Admin/Index';
import { AdminProfile } from './Pages/Admin/Profile/Index';
import { Users } from './Pages/Admin/Users/Index';
import { Companies } from './Pages/Admin/Companies/Index';
import { CreateUserDetails } from './Pages/User/Profile/UserDetails/CreateDetails/CreateUserDetails';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="UserHome" component={UserHome} />
        <Stack.Screen name="JobApplications" component={JobApplications} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="CreateUserDetails" component={CreateUserDetails} />
        <Stack.Screen name="CompanyHome" component={CompanyHome} />
        <Stack.Screen name="OurApplications" component={OurApplications} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
        <Stack.Screen name='AdminHome' component={AdminHome} />
        <Stack.Screen name='AdminProfile' component={AdminProfile} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='Companies' component={Companies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

