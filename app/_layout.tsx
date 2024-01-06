import { Stack, useGlobalSearchParams } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const { city } = useGlobalSearchParams<{ city: string }>();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[city]" options={{ title: city || "Undefined" }} />
    </Stack>
  );
}
