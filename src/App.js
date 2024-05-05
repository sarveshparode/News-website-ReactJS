
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


const App =()=>{
  const pageSize= 6; 
   const [progress,setProgress]=useState(0)
 
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
          height={5}
        color='black'
        progress={progress}
        
      />
        <Switch>
        {/* <Route exact path="/home"><News setProgress={setProgress}  key="home" pageSize={pageSize} country='in' category='home'/></Route> */}
          <Route exact path="/"><News setProgress={setProgress}  key="General" pageSize={pageSize} country='in' category='General'/></Route>
          <Route exact path="/Business"><News setProgress={setProgress} key="Business" pageSize={pageSize} country='in' category='Business'/></Route>
          <Route exact path="/Entertainment"><News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country='in' category='Entertainment'/></Route>
          <Route exact path="/General"><News setProgress={setProgress} key="General" pageSize={pageSize} country='in' category='General'/></Route>
          <Route exact path="/Health"><News setProgress={setProgress} key="Health" pageSize={pageSize} country='in' category='Health'/></Route>
          <Route exact path="/Science"><News setProgress={setProgress} key="Science" pageSize={pageSize} country='in' category='Science'/></Route>
          <Route exact path="/Technology"><News setProgress={setProgress} key="Technology" pageSize={pageSize} country='in' category='Technology'/></Route>
          <Route exact path="/Sports"><News setProgress={setProgress} key="Sports" pageSize={pageSize} country='in' category='Sports'/></Route>
        </Switch>
      </Router>
      </div>
    )
 
}

export default App;