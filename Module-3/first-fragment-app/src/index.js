import React from 'react';

import  ReactDOM  from 'react-dom/client';

// import FragmentApp from './components/FragApp';

// import InlineApp from './components/InlineApp';

// import InternalApp from './components/InternalApp';

import ExternalApp from './components/ExternalApp';

import './css/style.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<React.StrictMode>

{/* <FragmentApp/> */}

{/* <InlineApp/> */}

{/* <InternalApp/> */}

<ExternalApp/>

</React.StrictMode>

);

reportWebVitals();