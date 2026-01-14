import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { User } from './services/api';
import './App.css';

type View = 'login' | 'register' | 'home';

function App() {
  const [view, setView] = useState<View>('login');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setView('home');
    }
  }, []);

  const handleLoginSuccess = (loggedInUser: User, loggedInToken: string) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    localStorage.setItem('token', loggedInToken);
    setView('home');
  };

  const handleRegisterSuccess = () => {
    setView('login');
    alert('Kayıt başarılı! Giriş yapabilirsiniz.');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setView('login');
  };

  return (
    <div className="App">
      {view === 'login' && (
        <Login
          onSuccess={handleLoginSuccess}
          onSwitchToRegister={() => setView('register')}
        />
      )}
      {view === 'register' && (
        <Register
          onSuccess={handleRegisterSuccess}
          onSwitchToLogin={() => setView('login')}
        />
      )}
      {view === 'home' && user && (
        <Home user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
