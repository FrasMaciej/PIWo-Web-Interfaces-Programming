import { useState, useContext, useEffect } from "react";
import UserContext from "../../data/UserContext";
import { Link } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';
import RealEstateListPage from "../RealEstateList/RealEstateListPage";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../SharedComponents/UseLocalStorage";

import { logInWithGoogle, logInWithFacebook, useUser, logout } from "../../Firebase/userService"
import { logInWithEmail, updateDisplayName } from "../../Firebase/userService";
import RegisterPage from "./RegisterPage";


const LoginPage = () => {
    // const [userEmail, setUserEmail] = useLocalStorage('userEmail', '');
    // const [userPassword, setUserPassword] = useLocalStorage('userPassword', '');
    // const [userName, setUserName] = useContext(UserContext);
    // const navigate = useNavigate();

    // const handleUsernameChange = (event) => {
    //     setUserEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //     setUserPassword(event.target.value);
    // };

    // const handleLogin = () => {
    //     axios.get("data/users.json").then((response) => {
    //         const users = Array.from(response.data);
    //         let userFound = false;
    //         users.forEach((user) => {
    //             if (user.email === userEmail && user.password === userPassword) {
    //                 userFound = true;
    //                 setUserName(user.name + ' ' + user.surname);
    //                 navigate('real-estates-list');
    //             }
    //         });
    //         if (!userFound) {
    //             alert('Invalid login data');
    //         }
    //     })
    // };

    // return (
    //     <div className="App" >
    //         <div className="login-form">
    //             <h2>Login</h2>
    //             <div className="form-fields">
    //                 <label className="form-single-field">
    //                     Email
    //                     <input type="text" value={userEmail} onChange={handleUsernameChange} />
    //                 </label>
    //                 <label className="form-single-field">
    //                     Password
    //                     <input type="password" value={userPassword} onChange={handlePasswordChange} />
    //                 </label>
    //                 <br />
    //                 <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
    //             </div>
    //         </div>
    //     </div>
    // );

    const user = useUser();
    const [userName, setUserName] = useContext(UserContext);
    const userContext = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailLogin = async () => {
        try {
            const user = await logInWithEmail(email, password);
            if (user) {
                await updateDisplayName("Some Display Name");
                setUserName(user.displayName);
            }
        } catch (err) {
            console.error(err);
        }
    };


    const logout_user = () => {
        logout();
    }

    useEffect(() => {
        if (user) {
            setUserName(user.displayName);
        } else {
            setUserName('');
        }
    }, [user, setUserName]);

    if (user) {
        return <div className="app buttons">
            <button className="button button-logout" onClick={logout_user}>Logout</button>
        </div>
    }

    return (
        <div>
            <div className="app buttons">
                <h2>Logowanie</h2>
                <div className="email-login flex">
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                    <button className="button button-email" onClick={handleEmailLogin}>Login</button>
                </div>
            </div>
            <div className="app buttons">
                <button className="button button-google" onClick={logInWithGoogle}>
                    Login with Google
                </button>
                <button className="button button-facebook" onClick={logInWithFacebook}>
                    Login with Facebook
                </button>
            </div>
            <RegisterPage />
        </div>
    );

};

export default LoginPage;