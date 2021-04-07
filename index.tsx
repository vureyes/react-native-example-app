import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider} from 'react-native-paper';

import store from './src/redux/store';
import App from './src/App';

const Root = () => (
  <ReduxProvider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </ReduxProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
