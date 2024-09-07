import logo from "../assets/navbar-icon.svg"
import websiteicon from "../assets/website-icon.svg"
import {  useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const Navbar = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const handleGoToWebsite = () => {
        cookies.remove('token');
        navigate('/');
    };


    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <span className="logo-text">Black IN Dashboard</span>
                </div>
                <button className="create-button" onClick={handleGoToWebsite}>
                <img src={websiteicon} alt="logo" className="nav-icon" />
                    <span style={{whiteSpace:"nowrap"}}>Go To Website</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
