import { useState } from 'react';

export function Login({onLogin}) {
    const [userData, setUserData] = useState({
      userName :"",
      userPassword:"",
      userRemember: false,
    })

    function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      const type = event.target.type;
      const check = event.target.checked;

      setUserData((previousState) => {
        return {
          ...previousState,
          [name] : type === "checkbox" ? check : value
        }
      })
    }
    
    const handleLogin = (event) => {
      event.preventDefault();
      onLogin(userData);
    };

  function handleResetButton(){
      setUserData({
          userName: '',
          userPassword: '',
          userRemember: false,
  })
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <p>Nombre de usuario: </p>
        <input name="userName" value={userData.userName} onChange={handleChange}/>
        <p>Contraseña: </p>
        <input name="userPassword" type="password" value={userData.userPassword} onChange={handleChange}/>
        <p>Recuérdame</p>
        <input name="userRemember" type="checkbox" checked={userData.userRemember} onChange={handleChange}/>
        <button disabled={!userData.userName || !userData.userPassword}>Iniciar sesión</button>
        <button onClick={handleResetButton}>Reset</button>
      </form>
    </div>
  )
}