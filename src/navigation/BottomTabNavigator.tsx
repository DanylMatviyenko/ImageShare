import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PhotosFeedNavigator } from '../features/PhotosFeed/PhotosFeedNavigator';
import { SettingsNavigator } from '../features/Settings/SettingsNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { screenNames } from './Routes';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
            <BottomTab.Navigator initialRouteName="BottomNavigation"
                                 tabBarOptions={{ activeTintColor: '#000' }}>
                <BottomTab.Screen name={ screenNames.PhotosFeed }
                                  component={ PhotosFeedNavigator }
                                  options={{
                                      title: 'Photos',
                                      tabBarIcon: ({ color }) => (
                                            <MaterialCommunityIcons name="cog" color={color} />
                                          )
                                  }}/>
                <BottomTab.Screen name={ screenNames.Settings }
                                  component={ SettingsNavigator }
                                  options={{
                                      title: 'Settings',
                                      tabBarIcon: ({ color }) => (
                                          <MaterialCommunityIcons name="image-multiple" color={color} />
                                      )
                                  }}/>
            </BottomTab.Navigator>
    );
}