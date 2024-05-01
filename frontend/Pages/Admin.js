import { createDrawerNavigator } from '@react-navigation/drawer';
import { AdminHome } from './Admin/Index';
import { AdminProfile } from './Admin/Profile/Index';
import { Users } from './Admin/Users/Index';
import { Companies } from './Admin/Companies/Index';


const Drawer = createDrawerNavigator()

export default function Admin() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Ana Sayfa' component={AdminHome} />
      <Drawer.Screen name='Profilim' component={AdminProfile} />
      <Drawer.Screen name='Kullanıcılar' component={Users} />
      <Drawer.Screen name='Şirketler' component={Companies} />
    </Drawer.Navigator>
  );
}