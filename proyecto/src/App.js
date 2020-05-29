import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import UserName from './components/UserName/UserName';
import OTPform from './components/OTPForm/OTPForm';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      userID:'',
      route:'login',
      codOTP:'',
      username:''
    }
  }
  onRouteChange=(route)=>{
    this.setState({route:route});
    
    
}

calculateOTP=()=>{
  let value=Math.floor(Math.random()*89999+100000);
  this.onSubmitCode(value);
  this.setState({codOTP:value});
  
  
  }

  onSubmitCode=(value)=>{
    fetch('http://localhost:3001/'	,{
			 method:'put',
			headers:{'Content-Type': 'application/json'},
			body: JSON.stringify({
        codOTP:value,
        userID:this.state.userID
					})
     
        })
        .then(response=>response.json())
  }

  loadUserID=(user)=>{
this.setState({userID:user})
  }


 render(){
const {route}=this.state;
  return (
    <div className="App">
   {
    (route=='username')?
    <UserName onRouteChange={this.onRouteChange} calculateOTP={this.calculateOTP} loadUserID={this.loadUserID}/>:
     (route=='otpform')?
      <OTPform calculateOTP={this.calculateOTP}/>:
      <Login onRouteChange={this.onRouteChange}/>
    }
    </div>
    

  );
}
 }

export default App;
