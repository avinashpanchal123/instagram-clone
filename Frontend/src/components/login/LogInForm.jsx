import "./LogIn.css"

function LogInForm(){
    return (
        <div className="login-form">
            <form >
                <input type="text" name="" placeholder="phone no, email or username" />
                <input type="password" name="" placeholder="password" />
                <input type="submit" value="Log In" />
            </form>

        </div>
    )
}

export default LogInForm;