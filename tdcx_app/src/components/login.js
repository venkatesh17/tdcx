import React, { useEffect, useState} from "react";
import {useHistory } from "react-router-dom";
import axios from 'axios'
import '../css/login.css'


function Login() {

    const [login, setLogin] = useState({})
    let history = useHistory();

    const [data, setLoginData] = useState({username:"", password:""})


    // useEffect(() => {
    //     fetch('http://localhost:5000/v1/myapp/login', data)
    //       .then((response) => response.json())
    //       .then((data) => 
    //       console.log("------------", data)
    //       )
    //       .catch((error) => console.log(error.message));
    //   }, []);

      const onChangeUserName = (e) =>{
        setLoginData({...data,username:e.target.value})
      }

      const onChangePassword =(e)=>{
        setLoginData({...data, password:e.target.value})
      }

      const onLogin = async ()=>{

        const config = {
          url:'http://localhost:5000/v1/myapp/login',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: data
      };


        let result = await axios(config)
        if(result.data.success == true){
          localStorage.setItem('username', data.username)
          localStorage.setItem('password', data.password)
          history.push('/dashboard')
        }else{
          alert("Please enter correct credentials....!")
        }
  
    
      }

    
      
    return(
    <>
        <div className="login_container">
            <div className="container">
                <p className="login_title">Login</p>
                <input className="email_value" 
                       type="text" 
                       name="username" 
                       placeholder="Email"
                       onChange={onChangeUserName}
                 />
                <input className="password_value" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={onChangePassword}
                        />
                <button className="btn btn-primary login_btn" 
                        type="submit"
                        onClick={onLogin}
                >LogIn</button>
            </div>
        </div>

    </>
    )
}

export default Login;
