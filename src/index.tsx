import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import 'scss/main.scss'

import HomePage from 'pages/HomePage';
import NavBar from 'components/NavBar';
import Button from 'components/Button';


// !!!temporary!!!
import OurEvent from 'sections/OurEvent';
import About from 'sections/About';
import Sesepuh from 'sections/Sesepuh';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SimpleBar style={{ maxHeight: "100vh"}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />

            {/* welcome to the debug land */}
            <Route path='debug'>

              <Route path='1' element={
                <div className='centerFlex' style={{ height: "100vh" }}>
                  <Button to='/' text='LOGIN' />
                </div>
              } />


              <Route path='2' element={<Sesepuh />} />
              <Route path='3' element={<OurEvent />} />
              <Route path='4' element={<About />} />

            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </SimpleBar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
