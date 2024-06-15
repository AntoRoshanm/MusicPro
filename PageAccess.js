import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Facebook from './Facebook';
import CreateNewPage from "./CreateNewAccount"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Choosesong from "./choosesong";
import MainPages from "./MainPage";
import Forgottenpass from "./Forgottenpass"

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     );
//   }

const App = () => {
  return (
    <NavigationContainer independent={true} >
      {/* <Tab.Navigator >
        <Tab.Screen name="ScreenA" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Facebook" component={Facebook} options={{ headerShown: false }} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Facebook" component={Facebook} options={{ headerShown: false }} />
        <Stack.Screen name="CreateNewPage" component={CreateNewPage} options={{ headerShown: false }} />
        <Stack.Screen name="Choosesong" component={Choosesong} options={{ headerShown: false }} />
        <Stack.Screen name="MainPages" component={MainPages} options={{ headerShown: false }} />
        <Stack.Screen name="Forgottenpass" component={Forgottenpass} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
