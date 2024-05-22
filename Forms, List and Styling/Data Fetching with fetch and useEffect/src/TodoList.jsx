import React, { useState } from 'react'

function TodoList() {
    const [todoes, setTodoes] = useState([])
    
    function handleSubmit(event) {
        event.preventDefault()
        const value = event.target.input.value

        setTodoes((todoes) => [...todoes, value]);
        event.target.input.value = ""

    }

    function handleReset() {
        setTodoes([])
    }

    function handleRemove(item) {
        const element = todoes.indexOf(item)
        const newArray = [...todoes]
        newArray.splice(element, 1)

        setTodoes(newArray)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='input'/>
            <button type='submit'>Add</button>
        </form>
        <ul>
            {todoes.map((item, index) => {
                return <div key={index}>
                    <li>{item}</li>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
            })}
        </ul>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default TodoList
