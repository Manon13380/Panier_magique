import  '../FormLogin/FormLogin.css'
import React from 'react'

const FormLogin = ({handleUserName, handlePassword, userName, password}) => {
  return (
    <div id="formLoginContainer">
    <input className="inputLogin" type="text" placeholder='Votre userName' onChange = {handleUserName} autoComplete="current-email" value={userName} required/>
    <input className="inputLogin" type="password" placeholder='Votre mot de passe' onChange = {handlePassword} autoComplete="current-password" value={password} required/>
    </div>
    
  )
}

export default FormLogin