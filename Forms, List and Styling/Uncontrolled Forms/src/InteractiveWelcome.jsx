import { useState } from 'react';
import Welcome from './Welcome';


export function InteractiveWelcome() {
    const [welcomeName, setWelcomeName] = useState("")

    function handleNameChange(event) {
        setWelcomeName(event.target.value);
    }

  return (
    <>
      <Welcome name ={welcomeName} />
      <input type="input" onChange={handleNameChange}/>
    </>
  )
}