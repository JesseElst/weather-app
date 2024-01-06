import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { StatusBar } from "react-native";

export default function TabLayout() {
  const { city } = useLocalSearchParams<{ city: string }>();
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 70 },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Hourly",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "clock" : "clock-outline"}
                size={Sizes.icon}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="days"
          options={{
            title: "Days",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "calendar-refresh" : "calendar-refresh-outline"}
                size={Sizes.icon}
                color={Colors.primary}
              />
            ),
          }}
          initialParams={{ city: city }}
        />
      </Tabs>
    </>
  );
}
