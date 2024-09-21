import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {LoginScreen, SignupScreen} from './screens';
const App = () => {
return (
<SafeAreaProvider>
<LoginScreen />
</SafeAreaProvider>
);
};
export default App;