import  '../FormLogin/FormLogin.css'
import React from 'react'

const FormLogin = ({handleUserName, handlePassword, userName, password}) => {
  return (
    <div >
    <input type="text" placeholder='Votre userName' onChange = {handleUserName} autoComplete="current-email" value={userName}/>
    <input type="password" placeholder='Votre mot de passe' onChange = {handlePassword} autoComplete="current-password" value={password}/>
    </div>
    
  )
}

export default FormLogin