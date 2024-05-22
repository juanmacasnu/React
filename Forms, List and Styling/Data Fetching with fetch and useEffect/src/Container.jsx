import React from 'react'
import { useState } from 'react'

function Container({ title, children }) {
    const [collapse, setCollapse] = useState(false)

    function handleToogle() {
        setCollapse(t => !t)
    }

  return (
    <div className = 'container'>
      <div>
            {title}
            <button onClick={handleToogle}>Toogle</button>
        </div>
      {!collapse && <div>{children}</div>}
    </div>
  )
}

export default Container
