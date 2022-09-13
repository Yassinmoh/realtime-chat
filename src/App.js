import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  const { currentUser } = useContext(AuthContext)
  console.log("currentUser", currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>}
            />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
