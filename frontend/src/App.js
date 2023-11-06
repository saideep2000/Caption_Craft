import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/guest/Signup';
import LoginPage from './pages/guest/Login';
import HomePage from './pages/guest/Home';

function App() {
  return (
    <div>
    <div>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Signup" element={<SignupPage/>} />
            <Route path="/Home" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;