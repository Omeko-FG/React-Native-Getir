import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
// import * as Linking from "expo-linking"

// const prefix = Linking.createURL("/")

export default function App() {
  // const linking = {
  //   prefixes: [prefix],
  //   config: {
  //     screens: {
  //       Search: {
  //         screens: {
  //           CartScreen: {
  //             path:"cartScreen",
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: "10%"
  },
});
