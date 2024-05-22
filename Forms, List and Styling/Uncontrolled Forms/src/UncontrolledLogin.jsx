    export function UncontrolledLogin(){
    function onLogin(event) {
        event.preventDefault()

        //const username = event.target.elements.namedItems('username').value
        //const password = event.target.elements.namedItems('password').value
        //const remember = event.target.elements.namedItems('remember').checked

        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')
        const session = formData.get('remember')

        console.log({username, password, session})
    }

    return(
        <form onSubmit={onLogin}>
            <input  name="username" type="text"/>
            <input  name="password" type="password"/>
            <input  name="remember" type="checkbox" />
            <button>Login</button>
            <button name="session" type="reset">Reset</button>
        </form>
    )
}