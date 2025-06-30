import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: "blue",
      }
    }}>

      <Stack.Screen name="index" options={{
        headerTitle: " ",
        headerTintColor: 'white',
      }}/>
      <Stack.Screen name="login" options={{
        headerTitle: " ",
        headerTintColor: 'white',
      }}/>
      <Stack.Screen name="signup" options={{
        headerTitle: " ",
        headerTintColor: 'white',
      }}/>
    </Stack>

  )
}
