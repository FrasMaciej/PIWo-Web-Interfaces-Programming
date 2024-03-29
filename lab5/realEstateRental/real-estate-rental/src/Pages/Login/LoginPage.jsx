import { useState, useContext } from "react";
import UserContext from "../../data/UserContext";
import { Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
import RealEstateListPage from "../RealEstateList/RealEstateListPage";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../SharedComponents/UseLocalStorage";

const LoginPage = () => {
    const [userEmail, setUserEmail] = useLocalStorage('userEmail', '');
    const [userPassword, setUserPassword] = useLocalStorage('userPassword', '');
    const [userName, setUserName] = useContext(UserContext);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleLogin = () => {
        axios.get("data/users.json").then((response) => {
            const users = Array.from(response.data);
            let userFound = false;
            users.forEach((user) => {
                if (user.email === userEmail && user.password === userPassword) {
                    userFound = true;
                    setUserName(user.name + ' ' + user.surname);
                    navigate('real-estates-list');
                }
            });
            if (!userFound) {
                alert('Invalid login data');
            }
        })
    };

    return (
        <div className="App" >
            <div className="login-form">
                <h2>Login</h2>
                <div className="form-fields">
                    <label className="form-single-field">
                        Email
                        <input type="text" value={userEmail} onChange={handleUsernameChange} />
                    </label>
                    <label className="form-single-field">
                        Password
                        <input type="password" value={userPassword} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;