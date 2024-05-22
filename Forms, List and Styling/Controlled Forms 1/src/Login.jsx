import { useState } from 'react';
import { Welcome } from "./Welcome"

export function Login() {

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
    

  return (
    <div>
      <Welcome name={userData.userName} />
      <input name="userName" value={userData.userName} onChange={handleChange}/>
      <input name="userPassword" type="password" value={userData.userPassword} onChange={handleChange}/>
      <input name="userRemember" type="checkbox" value={userData.userRemember} checked={userData.userRemember} onChange={handleChange}/>
      <label htmlFor="userRemember">Recuérdame</label>
    </div>
  )
}