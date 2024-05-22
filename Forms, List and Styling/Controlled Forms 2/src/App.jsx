import { Login } from "./Login"

function App() {
  const handleLogin = (userData) => {
    console.log('User Data: ', userData);
  }

  return (
    <>
        <Login onLogin={handleLogin}/>
    </>
  )
}

export default App
