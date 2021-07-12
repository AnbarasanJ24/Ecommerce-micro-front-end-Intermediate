import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// If we are in developnment and isolation then call mount immediately 
if (process.env.NODE_ENV === 'development') {

    const devRoot = document.getElementById('_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// Else we are running through conatiner and we should import the mount function
export { mount };