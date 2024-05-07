import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from './bottomTab';
import { CalendarScreen, OverViewScreen, ReportScreen, SettingScreen } from '@/screens';
import { IC_Calendar, IC_Report, IC_Setting, IC_TabOverView } from '@/assets';
import { Optional } from '@/types';
import { RouteNames } from '@/enums';

const AppTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <AppTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: Optional) => <BottomTab {...props} />}>
      <AppTab.Screen
        name={RouteNames.Overview}
        component={OverViewScreen}
        options={{
          title: 'Overview',
          tabBarIcon: IC_TabOverView
        }}
      />
      <AppTab.Screen
        name={RouteNames.Calendar}
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: IC_Calendar
        }}
      />
      <AppTab.Screen
        name={RouteNames.Report}
        component={ReportScreen}
        options={{
          title: 'Report',
          tabBarIcon: IC_Report
        }}
      />
      <AppTab.Screen
        name={RouteNames.Setting}
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: IC_Setting
        }}
      />
    </AppTab.Navigator>
  );
};

export default MainTab;
