import React from 'react';
import ReactDOM from 'react-dom';


// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <h1>Marketing Standalone Apllication</h1>,
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