import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function FocusableInput() {
    const inputRef = useRef (null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    console.log(inputRef);

  return (
    <form>
        <input type="text" ref={inputRef}/>
    </form>
  )
}

export default FocusableInput
