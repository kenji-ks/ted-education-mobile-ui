import { Tabs } from "expo-router";
import React from "react";
import AppIcon from "@/components/ui/AppIcon";

export default function Layout() {
return (
  <React.Fragment>
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#618FA7" }} >
          <Tabs.Screen 
            name="home" 
            options={{
              title: "Home",
              tabBarIcon: ({color}) => (
                <AppIcon 
                  iconname="home"
                  size={24}
                  color={color}
                  strokeWidth={2}
                />
              )
            }}
          />
          <Tabs.Screen 
            name="learn" 
            options={{
              title: "Learn",
              tabBarIcon: ({color}) => (
                <AppIcon 
                  iconname="LearnTab"
                  size={24}
                  color={color}
                  strokeWidth={2}
                />
              )
            }}
          />
          <Tabs.Screen 
            name="track"
            options={{
              title: "Track",
              tabBarIcon: ({color}) => (
                <AppIcon 
                  iconname="TrackTab"
                  size={24}
                  color={color}
                  strokeWidth={2}
                />
              )
            }}
          />
          <Tabs.Screen 
            name="health" 
            options={{
              title: "My Health",
              tabBarIcon: ({color}) => (
                <AppIcon 
                  iconname="HealthTab"
                  size={24}
                  color={color}
                  strokeWidth={2}
                />
              )
            }}
          />
          <Tabs.Screen 
            name="profile" 
            options={{
              title: "Profile",
              tabBarIcon: ({color}) => (
                <AppIcon 
                  iconname="Profile"
                  size={24}
                  color={color}
                  strokeWidth={2}
                />
              )
            }}
          />
          <Tabs.Screen 
            name="HomeFeatureCard" 
            options={{
              tabBarStyle: { display: 'none' },
            }}
          />
      </Tabs>    
  </React.Fragment>
);
}