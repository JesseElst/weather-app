import { Tabs, useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function TabLayout() {
  const { city } = useLocalSearchParams<{ city: string }>();
  console.log(city);
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Hourly" }} />
      <Tabs.Screen
        name="two"
        options={{
          title: "Days",
        }}
        initialParams={{ city: city }}
      />
    </Tabs>
  );
}
