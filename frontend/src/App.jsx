import FrontPage from './Pages/FrontPage'
import './App.css'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ChatPage from './Pages/ChatPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/authContext'
import LogOut from './Components/LogOut'

function App() {
  const {isAuthenticated} = useAuthContext();

  return (
    <div>
    <Routes>
      <Route  path="/" element={isAuthenticated ? <Navigate to={"/chat"}/> : <FrontPage />} />
      <Route  path="/login" element={isAuthenticated ? <Navigate to={"/chat"}/> : <LoginPage />} />
      <Route  path="/signup" element={isAuthenticated ? <Navigate to={"/chat"}/> : <SignupPage />} />
      <Route path='/chat' element={isAuthenticated ? <ChatPage /> : <Navigate to={"/"}/>}/>
    </Routes>
    <Toaster />
    </div>
    // <>
    //   <LogOut/>
    // </>
  )
}

export default App
