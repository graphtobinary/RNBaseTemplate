import * as React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Colors} from './src/constants';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.ui_light_selected_bg,
  },
});

function App() {
  return (
    <GestureHandlerRootView style={AppStyle.appContainer}>
      <SafeAreaView style={AppStyle.appContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.ui_grey_10}
        />
        <AppNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
