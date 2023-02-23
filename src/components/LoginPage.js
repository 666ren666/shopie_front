function LoginPage({login}){
    function formlogin(e){
        e.preventDefault()
        login(e.target.username.value, e.target.password.value)
    }
return (
        <div className="login_main_div">
        <div className="login_image">
        <div className="login_container">

            <h3 className="login_text_2">Please Login</h3>

            <div className="login_text">
            <form onSubmit={formlogin}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
            </div>

        </div>
        </div>
        </div>
    )
}

export default LoginPage