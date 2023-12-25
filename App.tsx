import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
LogBox.ignoreAllLogs();
import * as Linking from "expo-linking"
const prefix = Linking.createURL("/")

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Search: {
          screens: {
            CartScreen: {
              path:"cartScreen/:message",
              parse:{
                message:(message:string)=> `ourmessage-${message}`
              }
            }
          }
        }
      }
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: "10%"
  },
});
