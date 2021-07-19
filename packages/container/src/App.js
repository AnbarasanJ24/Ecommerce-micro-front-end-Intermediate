import React from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import { createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter generateClassName={generateClassName}>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    )
}