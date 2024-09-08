import logo from "../assets/logo.svg";
import LoginHook from "../CustomHooks/Auth/Login-Hook";

const LoginForm = () => {
    // Suppose id is get through useParams() from React router dom
    // const { uid } = useParams(); 
    const uid = "1231"
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        loading,
        error,
    } = LoginHook(uid); 

    return (
        <div className="login-form">
            <div className="login-title">
                <img src={logo} alt="logo" className="logo-img" />
                <h1>Log in</h1>
            </div>
            <form className="login-form-content" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder=" Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder=" Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"  className="login-button" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p className="error-message">{error}</p>}

            </form>

        </div>
    );
};

export default LoginForm;
