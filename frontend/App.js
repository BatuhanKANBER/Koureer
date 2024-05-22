import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Pages/Login/Index';
import { Register } from './Pages/Register/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserHome } from './Pages/User/Index';
import { UserProfile } from './Pages/User/Profile/Index';
import { JobApplications } from './Pages/User/Applications/Index';
import { CompanyHome } from './Pages/Company/Index';
import { CompanyProfile } from './Pages/Company/Profile/Index';
import { AdminHome } from './Pages/Admin/Index';
import { AdminProfile } from './Pages/Admin/Profile/Index';
import { Users } from './Pages/Admin/Users/Index';
import { CreateUserDetails } from './Pages/User/Profile/UserDetails/CreateDetails/CreateUserDetails';
import { CreateCompanyDetails } from './Pages/Company/Profile/CompanyDetails/CreateDetails/CreateCompanyDetails';
import { EditUserDetails } from './Pages/User/Profile/UserDetails/EditDetails/EditUserDetails';
import { EditProfile } from './Pages/User/Profile/EditProfile/EditProfile';
import { EditCompanyProfile } from './Pages/Company/Profile/EditProfile/EditProfile';
import { EditCompanyDetails } from './Pages/Company/Profile/CompanyDetails/EditDetails/EditCompanyDetails';
import { EditAdminProfile } from './Pages/Admin/Profile/EditProfile/EditAdminProfile';
import { User } from './Pages/Admin/User/Index';
import { Categories } from './Pages/Admin/Category/Index';
import { CategoryCreate } from './Pages/Admin/Category/CategoryCreate/CategoryCreate';
import { Category } from './Pages/Admin/Category/Category';
import { CategoryEdit } from './Pages/Admin/Category/CategoryEdit';
import { CreateAdvert } from './Pages/Company/Advertisement/CreateAdvert/Index';
import { Advert } from './Pages/Company/Advertisement/Advert';
import { AdvertEdit } from './Pages/Company/Advertisement/AdvertEdit';
import OurAdvertisements from './Pages/Company/Advertisement/Index';

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
        <Stack.Screen name='EditUserDetails' component={EditUserDetails} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name="CompanyHome" component={CompanyHome} />
        <Stack.Screen name="OurAdvertisements" component={OurAdvertisements} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
        <Stack.Screen name='CreateCompanyDetails' component={CreateCompanyDetails} />
        <Stack.Screen name='EditCompanyProfile' component={EditCompanyProfile} />
        <Stack.Screen name='EditCompanyDetails' component={EditCompanyDetails} />
        <Stack.Screen name='CreateAdvert' component={CreateAdvert} />
        <Stack.Screen name='Advert' component={Advert} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name='AdvertEdit' component={AdvertEdit} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name='AdminHome' component={AdminHome} />
        <Stack.Screen name='AdminProfile' component={AdminProfile} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='EditAdminProfile' component={EditAdminProfile} />
        <Stack.Screen name='User' component={User} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='CategoryCreate' component={CategoryCreate} />
        <Stack.Screen name='Category' component={Category} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name='CategoryEdit' component={CategoryEdit} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

