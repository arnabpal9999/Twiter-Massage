import React ,{Component} from 'react';

import './App.css';
import fire from './config/fire';
import Home from './Home';
import Login from './Login'

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      users: {}
    }
  }
  
  componentDidMount(){
    this.authListener();
  }
  
  authListener(){
    
    fire.auth().onAuthStateChanged((users)=>{
      if(users){
        this.setState({users})
      }
      else{
        this.setState({users : null })
      }
    })
    
  }
  
    render(){
      return (
        <>
      
      
        <div className="App">
  
        
         {this.state.users ? (<Home/>) : (<Login/>)}
       
        </div>
       
   
        </>
      );
  
  
    }
  }
  
  export default App;
  