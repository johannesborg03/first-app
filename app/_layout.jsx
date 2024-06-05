import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

//What is a SplashScreen?: 
//Purpose: 
//A splash screen is an initial screen that appears briefly when an app is launched. 
//It typically displays the app's logo, name, or other branding elements.
//Benefits:
//Provides a visual cue that the app is loading and not frozen.
//Creates a polished first impression for users.
//Can be used to perform initial setup tasks or load resources in the background.


//tells the splash screen not to disappear automatically after a certain period. 
//This gives you full control over when the splash screen is hidden, typically after your app's initial setup or loading is complete
SplashScreen.preventAutoHideAsync(); 

 // Load custom fonts using useFonts hook from Expo Font (or a similar library)
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"), // Load the Poppins Black font file from assets
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  
  useEffect(() => {        // React hook that runs after the component renders
    if (error) throw error; // If there's an error loading the fonts, throw it to stop further execution

    if (fontsLoaded) {      // If the fonts have finished loading
      SplashScreen.hideAsync(); // Hide the splash screen (usually shown while the app loads)
    }
  }, [fontsLoaded, error]);   // This effect runs only when 'fontsLoaded' or 'error' changes

  // Conditional rendering:
  if (!fontsLoaded && !error) {  // If fonts are NOT loaded AND there's NO error (still loading)
    return null;                // Don't render anything yet 
  }
  


  return (
   <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
   </Stack>
  )
}

export default RootLayout