import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompanyHome } from './Company/Index';
import { OurApplications } from './Company/Applications/Index';
import { CompanyProfile } from './Company/Profile/Index';


const Tab = createBottomTabNavigator();

export function Company() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ana Sayfa" component={CompanyHome} />
      <Tab.Screen name="İlanlarımız" component={OurApplications} />
      <Tab.Screen name="Profil" component={CompanyProfile} />
    </Tab.Navigator>
  );
}