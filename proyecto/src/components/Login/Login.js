import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{
    constructor(props){
        super(props)
    }


render(){
    return(
        
            <div>
                <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Usuario</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
        
            <button type="submit" className="btn btn-primary">Ingresar</button>
            <button 
             type="button" 
             class="btn btn-link"
             onClick={()=>{
                 this.props.onRouteChange('username');
                 }} >Olvidé mi usuario</button>
            </form>
            </div>
       

    );
}

}
export default Login;
