function Login() {
    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState("")

   function handleUsernameChange (event) {
    setUsername (event.target.value)

   }

   function handlePasswordChange (event) {
    setPassword (event.target.value)

   }

   function handleResetChange () {
    setUsername("")
    setPassword("")
   }

   function handleSubmit (event) {
    event.preventDefault()
    console.log(username, password);
    setUsername("")
    setPassword("")
   }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={handleUsernameChange} type="text" />
        <input value={password} onChange={handlePasswordChange} type="password" />
        <button>Login</button>
        <button onClick={handleResetChange} type='button'>Reset</button>
      </form>
    </div>
  )
}

export default Login
