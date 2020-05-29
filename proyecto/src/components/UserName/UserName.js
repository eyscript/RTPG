import React from 'react';
import './UserName.css';

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state={
			userID:'',
            userPIN:'',
            error:false,
            resp:false
		}
	}
	onuserIDChange=(event)=>{
        let cad=event.target.value;
        if(cad.length>10){
           this.setState({error:true});
            event.target.value="";
        }
        else{
           
            this.setState({userID:event.target.value});
            this.setState({error:false});
        }
        
		
    }

	onPinChange=(event)=>{
		this.setState({userPIN:event.target.value})
	}
	
    onSubmitUserForm=()=>{

        fetch('http://localhost:3001/', {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userID:this.state.userID,
                userPIN:this.state.userPIN
            })
        })
        .then((response)=>response.json())
        .then((res)=>{
        })
        .then(()=>{
        if(!(this.state.resp.length==0)){
            this.props.onRouteChange('otpform');
            this.props.loadUserID(this.state.userID);
           this.props.calculateOTP();
        }})

         
        

    }

    
    
render(){
    
    return(
        <div className="form-group form-wrapper">
        <div class="input-group mb-3 ">
        <select class="form-control">
            <option>Cédula de Identidad </option>
            <option>Pasaporte</option>
        </select>
            <input 
            type="text" 
            class="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            onChange={this.onuserIDChange} />
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">PIN de tarjeta</span>
            </div>
            <input 
            type="text" 
            class="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            onChange={this.onPinChange}/>
            {(this.state.error==true)?
            <div class="alert alert-warning" role="alert">
             “Nº de identificación incorrecta, verifique e intente de nuevo”.
             </div>:null}
  
            <button 
            class="btn btn-danger " 
             type="submit"
             onClick={this.onSubmitUserForm}>Confirmar</button>
              {(this.state.resp.length==0)?
            <div class="alert alert-warning" role="alert">
                "Usted no posee productos en el banco"
             </div>:null}
            </div>
</div>

    );
}

}
export default UserName;