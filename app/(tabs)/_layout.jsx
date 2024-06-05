import { View, Text, Image} from 'react-native' // This imports view (Basic building block for UI elements in React Native, similar to <div> in HTML)
// Imports Text: Used to display text content. Similar to <p> or <span> in HTML
// Imports Image: Allows you to display images in your app

import React from 'react' //This (probably, have not tried) is not required

import {Tabs, Redirect} from 'expo-router'; // Imports Tabs: A component for creating a tab-based navigation structure in your app
// Imports Redirect A component that allows you to programmatically redirect users to different routes within your app (not used YET)
import  icons from '../../constants/icons'; //Self-explanatory what this does duh

//These not used
import { images } from '../../constants/images';
import { index } from '../../constants/index';

//const = constant variable
//This code defines a functional component named TabIcon
//It takes several props: 
//icon (Image source for the icon to display)
//color (The color to apply on the icon and text)
//name (The text label to show below the icon)
//focused (A boolean value indicating whether this tab is currently active/focused)
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    //items-center (centers content horizontally):
    //justify-center (centers content vertically):
    //gap-2 adds a small gap between the icon and the text:
    <View className="items-center justify-center gap-2">
      <Image
      source={icon} //Sets the image source to the icon prop 
      resizeMode="contain" //Resizes the image to fit within the container while maintaining its aspect ratio
      tintColor={color} //Applies the color prop as a tint to the icon
      className="w-6 h-6" //Sets the width and height of the icon using Tailwind CSS Classes
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}> 
        {name} 
      </Text> 
    </View> //Text className= (this line means:) If focused is true, font will be -psemibold. If false, font will be pregular
    //This basically means if you are on a certain tab, it will be a little thicker showcasing that you are on that tab. It also adds color to it.
  )
}

//This declares the component using a concise arrow function syntax. 
// The component doesn't take any props (arguments), as indicated by the empty parentheses ().
const TabsLayout = () => {  // Start of the functional component definition for TabsLayout
  return (                  // Component returns JSX to be rendered
                             // This below: <> is: React Fragment to group multiple elements without an extra wrapping node in the DOM
    <>                      
      <Tabs                 // Tabs component, from a navigation library (Expo Router)
        screenOptions={{    // Configuration object for the overall appearance of the Tabs
          tabBarShowLabel: false,        // Hide text labels for each tab, showing only icons
          tabBarActiveTintColor: '#FFA001', // Set the color for the active (selected) tab icon (orange)
          tabBarInactiveTintColor: '#CDCDE0', // Set the color for inactive tab icons (light gray)
          tabBarStyle: {            // Style the tab bar container
            backgroundColor: '#161622',     // Set the background color to dark gray
            borderTopWidth: 1,             // Add a 1-pixel top border
            borderTopColor: '#232533',     // Set the top border color to slightly darker gray
            height: 84,                  // Set the height of the tab bar to 84 pixels
          }
        }} 
    >
      <Tabs.Screen    // Creates a screen for the tab navigation (part of a library expo-router)
  name="home"   // Sets the name of the screen to "home" (used for routing and referencing)
  options={{     // Object containing options for customizing the appearance and behavior of this tab screen
    title: 'Home',      // Sets the title of the tab screen (displayed in the header or tab bar label)
    headerShown: false,  // Hides the header for this tab screen
    tabBarIcon: ({ color, focused }) => ( // Defines a function to render the tab bar icon for this screen
      <TabIcon              // Uses a custom TabIcon component to render the icon
        icon={icons.home}    // Passes the 'home' icon from your icons object as a prop
        color={color}        // Passes the current tab bar color (active or inactive) as a prop
        name="Home"          // Passes the name "Home" to be displayed under the icon (if labels are shown)
        focused={focused}    // Passes a boolean indicating if this tab is currently active
      />
    )
  }}
  /> 
       <Tabs.Screen 
      name="bookmark"
      options={{
        title: 'Bookmark',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.bookmark}
          color={color}
          name="Bookmark"
          focused={focused}
          />
        )
      }}
      />
       <Tabs.Screen 
      name="create"
      options={{
        title: 'Create',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.plus}
          color={color}
          name="Create"
          focused={focused}
          />
        )
      }}
      />
       <Tabs.Screen 
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.profile}
          color={color}
          name="Profile"
          focused={focused}
          />
        )
      }}
      />
      </Tabs>
      </>
  )
}

export default TabsLayout