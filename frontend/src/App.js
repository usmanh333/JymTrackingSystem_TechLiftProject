import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashboard/*" element={<Dashboard/>} />
    </Routes>
    </Router>
    </> 
  );
}

export default App;
