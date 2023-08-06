/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar'
import AddUsers from './components/AddUsers';
import UserList from './components/UserList';
import DelAllUsers from './components/DelAllUsers';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <div className='container'>
        <div className='w-full flex justify-center'><Navbar /></div>
        <AddUsers />
        <UserList />
        <DelAllUsers />
      </div>
    </div>
  )
}

export default App
