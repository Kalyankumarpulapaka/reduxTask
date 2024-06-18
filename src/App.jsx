import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Card from './components/Card.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Card />
    </Provider>
  );
};

export default App;