import React,{useEffect} from 'react'
import './App.css';
import Login from './components/login'
import Chat from './components/chat'
import Sidebar from './components/sidebar'
import {useDispatch,useSelector} from 'react-redux';
import {login,logout} from './features/userslice';
import {auth} from './firebase';
import {Selectuser} from './features/userslice'


function App() {
  const dispatch =useDispatch();
  const user =useSelector(Selectuser);

  useEffect(()=> {
    auth.onAuthStateChanged((authuser)=> {
      

      if(authuser){
        dispatch(
          login({
            uid:authuser.uid,
            photo:authuser.photoURL,
            displayName:authuser.displayName,
            email:authuser.email
          })
        )
      } else {
        dispatch(logout())
      }
    })

  },[dispatch])

  return (
    <div className="app">
      
   {user ? (
     <>
     
     <Sidebar/>
      <Chat/>
      </>

   ):(
     <Login/>
     
   )}
   

 
    

 
    </div>
  );
}

export default App;
