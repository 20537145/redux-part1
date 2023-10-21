import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './redux/Reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  counterReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
 <Provider store={store}>
    <App />
    </Provider>
);