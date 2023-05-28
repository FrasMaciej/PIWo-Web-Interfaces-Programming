import { logInWithGoogle, useUser, logout } from "../Firebase/userService"

const Login = () => {
    const user = useUser();

    if (user)
        return <div className="app">
            <h2>You are {user.displayName}</h2>
            <button onClick={logout}>Logout</button>
        </div>

    return <div className="app">
        <button onClick={logInWithGoogle}>Log with big G</button>
    </div>
}

export default Login;