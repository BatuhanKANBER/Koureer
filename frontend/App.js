import { NavigationContainer } from '@react-navigation/native';
import { Company } from './Pages/Company';
import { Entry } from './Pages/Entry';


export default function App() {
  const isLogin = false

  return (

    isLogin ? <>
      <NavigationContainer>
        <Company />
      </NavigationContainer>
    </> : <>
      <Entry />
    </>

  );
}

