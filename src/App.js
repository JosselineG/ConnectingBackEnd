import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import { Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
 
    
     
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="Register" element={<Register/>}/>
       <Route path="Login" element={<Login/>}/>
       <Route path="Admin" element={<Admin/>}/>
     </Routes>

     
    </div>
  );
}

export default App;
