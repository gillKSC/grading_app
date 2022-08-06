import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Login from './components/Login';
import Exams from './components/Exams';
import Signup from './components/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './components/supabaseClient';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route
          path='/Student'
          element={
            !session ? (
              <Login />
            ) : (
              <Student key={session.user.id} session={session} />
            )
          }
        />
        <Route
          path='/Teacher'
          element={
            !session ? (
              <Login />
            ) : (
              <Teacher key={session.user.id} session={session} />
            )
          }
        />

        <Route path='/Login' element={<Login />} />
        <Route path='/Exams' element={<Exams />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
