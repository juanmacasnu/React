import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0, cambio = 1}) {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const reduction = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }


    return(
        <>
            <CounterDisplay count= {counter} />
            <button onClick={increment}>Increment</button>
            <button onClick={reduction}>Reduction</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}