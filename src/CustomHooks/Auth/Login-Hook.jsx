import { useState } from 'react';
// import axios from 'axios';
import Cookies from 'universal-cookie';

// eslint-disable-next-line no-unused-vars
const LoginHook = (uid) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cookies = new Cookies();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            // const response = await axios.post(
            //     `https://one-hand/login?uid=${uid}`,
            //     { email, password },
            //     {
            //         headers: {
            //             'X-secret-key': 'OH2024',
            //         },
            //     }
            // );
            if (email === 'admin@admin.com' && password === '12345678') {
                cookies.set('token', 'one-hand1234', { path: '/' });
                setTimeout(() => {
                    window.location.href= "/dashboard"
                    setEmail("")
                    setPassword("")
                }, 1000);
            } else {
                setError('Invalid email or password.');
                setEmail("")
                setPassword("")
            }
        } catch (err) {
            console.error('Login failed', err);
            setError('Login failed. Please try again.');
            setEmail("")
            setPassword("")
            cookies.remove('token'); 
        } finally {
            setLoading(false);
        }
    };


    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        loading,
        error,
    };
};

export default LoginHook;
