import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store from './store';
import {persistor} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter> 
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>            
        </Provider>
    </BrowserRouter>
    
);

