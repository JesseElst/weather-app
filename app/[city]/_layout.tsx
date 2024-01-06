import { Tabs, useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function TabLayout() {
  const { city } = useLocalSearchParams<{ city: string }>();
  console.log(city);
  return (
    <Tabs>
      <Tabs.Screen name="index" initialParams={{ city: city }} />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
        }}
        initialParams={{ city: city }}
      />
    </Tabs>
  );
}
