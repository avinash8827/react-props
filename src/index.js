import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { StudentContext } from './StudentContext';

const student_name= [  // Array of objects
                      {
                        name:"Avinash",
                        address:"NMh",
                      }
                    ];

ReactDOM.render(
  <React.StrictMode>
    <StudentContext.Provider value={student_name}>
      <App />
    </StudentContext.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
