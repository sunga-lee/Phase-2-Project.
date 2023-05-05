import React, { useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import BooksContainer from './BooksContainer'
import AddForm from './AddForm'

function App() {

  const[isDarkMode, setIsDarkMode]=useState(true);

  const onToggleDarkMode =()=>
    // console.log("I was clicked")
    setIsDarkMode(isDarkMode=>!isDarkMode)


  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}
        />
       <Switch>
       <Route exact path="/">
          <Home />
        </Route>
       
        <Route exact path="/books">
       <BooksContainer/>
       </Route>
        <Route exact path="/books/new">
       <AddForm/>
       </Route>

       </Switch>
        
   </div>
      
       
       
  );
  }

export default App;