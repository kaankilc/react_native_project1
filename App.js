import { StyleSheet, Image } from "react-native";
import SplashScreen from "./screens/auth/SplashScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import SignInScreen from "./screens/auth/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./utils/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/app/Home";
import Favorites from "./screens/app/Favorites";
import Profile from "./screens/app/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function Tabs() {
    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let icon;

              if (route.name === "Home") {
                icon = focused
                  ? require("./assets/clarity_home-solid.png")
                  : require("./assets/clarity_home-empty.png");
              } else if (route.name === "Favorites") {
                icon = focused
                  ? require("./assets/bookmark_active.png")
                  : require("./assets/bookmark.png");
              } else if (route.name === "Profile") {
                icon = focused
                  ? require("./assets/bi_person-fill.png")
                  : require("./assets/bi_person-empty.png");
              }
              // You can return any component that you like here!
              return <Image source={icon} style={{ width: 24, height: 24 }} />;
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {borderTopColor: Colors.lightGrey}
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </>
    );
  }
  const theme = {
    colors: {
      background: Colors.white,
    },
  };

  const isSignedIn = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container} theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
});
