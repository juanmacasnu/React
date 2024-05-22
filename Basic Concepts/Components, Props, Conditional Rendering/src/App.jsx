import {Hello} from "./Hello"
import { Message } from "./Message"
import { Welcome } from "./Welcome"

export function App() {
  return(
    <div>
       <Hello />
       <Hello />
       <Message />
       <Welcome name="John" age={ 30 }/>
    </div>
  )
}