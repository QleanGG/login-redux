import React, { useEffect, useState } from 'react'
import { useChangeUsername,useSelectUsername,useChangeLoggedIn,useSelectLoggedIn } from './hooks';

const Login = () => {

  const [userInput, setUserInput] = useState();
  const [passInput, setPassInput] = useState();

  const handlePassChange = ({target}) => setPassInput(target.value) 
  const handleUserChange = ({target}) => setUserInput(target.value) 
  const changeUsername = useChangeUsername();
  const username = useSelectUsername();
  const changeLogged = useChangeLoggedIn();
  const loggedIn = useSelectLoggedIn();

  function updateUserStatus(username,logged) {
    changeUsername(username)
    changeLogged(logged)
  }
 
  function handleLocalStorageData() {
    const userData = localStorage.getItem('userData');
    return JSON.parse(userData)
  }

  useEffect(() => {
    const userData = handleLocalStorageData();
    if (!userData) {
      return
    }
      updateUserStatus(userData["username"],userData["loggedIn"]);
  }, [])
  

  const handleLogin = () => {
    updateUserStatus(userInput,true);
    localStorage.setItem('userData',JSON.stringify({"username":userInput,"loggedIn":true}));
  }

  const handleLogout = () => {
    updateUserStatus('',false);
    localStorage.removeItem('userData')
  }

  return (
    <div>
        
        User<input id='user' onChange={handleUserChange}></input>
        Pass<input id='password' onChange={handlePassChange}></input>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>logout</button>
        <p>{username}</p>
        <h4>{loggedIn ? 'Logged in':'your out bitch'}</h4>

    </div>
  )
}

export default Login