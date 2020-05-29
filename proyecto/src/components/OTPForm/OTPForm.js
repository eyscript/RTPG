import React from 'react';


class OTPform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            disable:false,
            inputcodeOTP:''
        }
    }

   componentDidMount(){
       setTimeout(()=>{
           this.setState({disable:true});
       }, 3*60*1000)
    }

    onCodOTPChange=(event)=>{
		this.setState({inputcodeOTP:event.target.value})
	}

    onSubmitInputCode=()=>{
        fetch('http://localhost:3001/', {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                inputcodeOTP:this.state.inputcodeOTP,
                userID:this.props.userID
            })
        })
        .then((response)=>response.json())
        .then((res)=>{
          console.log(res)
        })
        if(!(this.state.resp.length==0)){
            this.props.loadUserID(this.state.username);
        }
    }


render(){
    return(
             <form>
                 <div class="alert alert-warning" role="alert">
                 Ingresa en el campo correspondiente el código enviado dentro del período de tiempo (3 minutos).
                 </div>
                 <div class="form-row">
                        <div class="form-group col-md-6">
                        <label htmlFor="inputPassword4">Ingrese código OTP</label>
                        <input type="text" class="form-control" id="inputOTP" onChange={this.onCodOTPChange}/>
                        </div>
                 </div>
               
             
               <button type="submit" class="btn btn-primary" disabled={this.state.disable} onClick={this.onSubmitInputCode} > Siguiente</button>

                <button type="submit" class="btn btn-primary" style={{margin:'30px'}} onClick={this.props.calculateOTP} >Reenviar Código</button>
            </form>
    );

}

}
export default OTPform;
