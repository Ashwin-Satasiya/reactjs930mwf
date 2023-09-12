import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hello from './components/HelloWorld';
// import Para from './components/Paragraph';
// import Check from './components/HeadingPara';

import AosApp from './components/AosApp';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(

    <React.StrictMode>
{/* <Hello/>
    <Para/>
    <Check/> 
            */}
    
    <AosApp/>

    </React.StrictMode>

);

reportWebVitals();