import React, { useState } from "react";
import { registerWithEmail } from "../../Firebase/userService";
import './LoginPage.css';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleDisplayNameChange = (event) => {
        setDisplayName(event.target.value);
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await registerWithEmail(email, password, displayName);
            // Zarejestrowano pomyślnie, możesz wykonać odpowiednie akcje (np. przekierowanie)
        } catch (error) {
            console.error("Błąd rejestracji:", error);
            // Obsłuż błąd rejestracji
        }
    };

    return (
        <div>
            <h2 className="center"></h2>
            <form className="flex" onSubmit={handleRegister}>
                <div>
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                </div>
                <div>
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                </div>
                <div>
                    <input type="text" value={displayName} onChange={handleDisplayNameChange} placeholder="Name and Surname" required />
                </div>
                <button className="button register-button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;