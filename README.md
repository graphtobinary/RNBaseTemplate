# RNBaseTemplate
================

A React Native project template for building mobile applications.

## Folder Structure
-------------------

### android/
Android platform-specific code

### ios/
iOS platform-specific code

### src/
Source code for the app

#### components/
Reusable UI components

#### navigation/
Navigation configuration

#### screens/
Individual app screens

#### services/
External service integrations

#### utils/
Utility functions

###.babelrc
Babel configuration

###.eslintrc.js
ESLint configuration

###.gitignore
Git ignore file

###.prettierrc
Prettier configuration

### babel.config.js
Babel configuration for React Native

### jest.config.js
Jest configuration

### metro.config.js
Metro configuration

### package.json
Project metadata and dependencies

### README.md
Project documentation

### yarn.lock
Yarn lock file

## Getting Started
---------------

### Prerequisites

* Node.js version >= 18
* Yarn version 3.6.4
* React Native CLI installed globally

### Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `yarn install`

## Running the App
---------------

### Android

1. Run `yarn android` to start the app on an Android emulator or device.

### iOS

1. Run `yarn ios` to start the app on an iOS simulator (iPhone 15, 17.0 by default).

## Development
---------------

### Start Metro Bundler

1. Run `yarn start` to start the Metro Bundler.

### Clean Android Build

1. Run `yarn clean:android` to clean the Android build directory.

### Linting

1. Run `yarn lint` to run ESLint on the project.

### Testing

1. Run `yarn test` to run Jest tests.

## Release
---------------

### Android Release

1. Run `yarn release:android` to build the app in release mode for Android.

## Dependencies
--------------

This project uses the following dependencies:

* React Native 0.74.1
* React 18.2.0
* @react-navigation/native 6.1.17
* @react-navigation/bottom-tabs 6.5.20
* @react-navigation/drawer 6.6.15
* @react-navigation/native-stack 6.9.26
* react-native-device-info 11.1.0
* react-native-encrypted-storage 4.0.3
* react-native-gesture-handler 2.16.2
* react-native-reanimated 3.11.0
* react-native-safe-area-context 4.10.1
* react-native-screens 3.31.1
* react-native-svg 15.3.0

## Dev Dependencies
-------------------

This project uses the following dev dependencies:

* @babel/core 7.20.0
* @babel/preset-env 7.20.0
* @babel/runtime 7.20.0
* @react-native/babel-preset 0.74.83
* @react-native/eslint-config 0.74.83
* @react-native/metro-config 0.74.83
* @react-native/typescript-config 0.74.83
* @types/react 18.2.6
* @types/react-test-renderer 18.0.0
* babel-jest 29.6.3
* eslint 8.19.0
* jest 29.6.3
* prettier 2.8.8
* react-test-renderer 18.2.0
* typescript 5.0.4