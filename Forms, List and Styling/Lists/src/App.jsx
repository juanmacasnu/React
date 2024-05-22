import Colors from "./Colors"

function App() {
  const obj = [
    {id: 1, name: "blue"},
    {id: 2, name: "red"},
    {id: 3, name: "green"},
    {id: 4, name: "orange"}
  ]

  return (
    <>
      <div>
        <Colors objectArray = {obj}/>
      </div>
    </>
  )
}

export default App
