import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import "./App.css"
import Widgets from './Widgets';
import Login from  '../src/Login'
import { useStateValue } from './StateProvider';


const App = () => {
  const [{user},dispatch]=useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login/>
      ):(
        <>
        <Header/>
        <div className='app__body'>
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
        </>
      )}
     
    </div>
  )
}

export default App