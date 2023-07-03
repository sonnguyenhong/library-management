import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Home from 'containers/app/screens/Home';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
   
    document.getElementById('root'),
);
serviceWorker.unregister();
