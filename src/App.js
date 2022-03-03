import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error404 from './pages/Error404'; //RFC
import Register from './pages/Register'; //RCC
import Login from './pages/Login'; //RFC
import GetStudent from './pages/GetStudent';
import EditStudent from './pages/EditStudent';
import A from './pages/A';
import Component1 from './Component1';
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Component1 /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register />  } />
            <Route path="/get_students" element={ <GetStudent /> } />
            <Route path="/edit_student/:stu_id" element={ <EditStudent /> } />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    </Router>
  );
}

export default App;
