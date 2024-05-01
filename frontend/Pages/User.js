import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserHome } from './User/Index';
import { UserProfile } from './User/Profile/Index';
import { JobApplications } from './User/Applications/Index';

const Tab = createBottomTabNavigator();

export function User() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ana Sayfa" component={UserHome} />
      <Tab.Screen name="Başvurularım" component={JobApplications} />
      <Tab.Screen name="Profilim" component={UserProfile} />
    </Tab.Navigator>
  );
}