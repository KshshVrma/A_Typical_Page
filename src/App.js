import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const LoggedInInformation=localStorage.getItem('isLoggedIn');
    if(LoggedInInformation==='1'){
      setIsLoggedIn(true);
    }
  },[])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn','1');

  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{
isLoggedIn:false
}}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        <button onClick={logoutHandler}>Logout</button>
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
