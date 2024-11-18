import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pagses/home/Home'
import Login from './pagses/login/Login'
import Register from './pagses/register/Register'
import { useEffect, useState } from 'react'

function App() {

  const [login, setLogin] = useState(false);

useEffect(()=>{
  if(localStorage.getItem('iap-token')){
    setLogin(true);
  }
  
},[])

  return (
    <div>
      {
        login ?
          <Main />
          :
          <Routes>
            <Route path='*' element={<Navigate to={'/login'} />}></Route>
            <Route path='/login' element={<Login />} key={'login-page'}></Route>
            <Route path='/register' element={<Register />} key={'register-page'}></Route>
          </Routes>
      }

    </div>
  )
}

export default App




function Main() {

  return (

    <div>
      <Home />
    </div>
  )
}