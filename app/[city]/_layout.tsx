import { Tabs, useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function TabLayout() {
  const { city } = useLocalSearchParams<{ city: string }>();
  return (
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
  );
}
