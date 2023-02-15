import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { hydrateAuth } from '@/core';
import { RootNavigator } from '@/navigation';

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <BottomSheetModalProvider>
      <RootNavigator />
      <FlashMessage position="top" />
    </BottomSheetModalProvider>
  );
};

export default App;
