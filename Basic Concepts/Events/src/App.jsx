import { AlertClock } from "./AlertClock"
export function App() {
  const currentTime = new Date();
  const getTime = () => ()=>   {
    alert(`The current time is ${currentTime.toLocaleTimeString()}`);
  }
  return(
    <div>
      <AlertClock timing = {getTime} />
    </div>
  )
}

