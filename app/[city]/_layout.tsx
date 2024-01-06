import { Tabs, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { StatusBar } from "react-native";

export default function TabLayout() {
  const { city } = useLocalSearchParams<{ city: string }>();
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Hourly" }} />
        <Tabs.Screen
          name="days"
          options={{
            title: "Days",
          }}
          initialParams={{ city: city }}
        />
      </Tabs>
    </>
  );
}
