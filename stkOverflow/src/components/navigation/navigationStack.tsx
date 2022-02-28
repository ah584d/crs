import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootScreen } from '../root/Root';

const StkOverflowStack = createStackNavigator();

export const StkOverflowStackScreen = (): ReactElement => {
  return (
    <StkOverflowStack.Navigator
      headerMode='none'
      screenOptions={() => {
        return {};
      }}>
      <StkOverflowStack.Screen name={'RootScreen'} component={RootScreen} initialParams={{ activeUser: 'anonymous' }} />
    </StkOverflowStack.Navigator>
  );
};
