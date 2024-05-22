import {Hello} from './Hello'
import { Messsage } from './Message';
import { Welcome } from './Welcome'

export function App(){
  return(
    <Hello />
    <Hello />
    <Messsage />
    <Messsage name="Juan"></Messsage>
  )
}