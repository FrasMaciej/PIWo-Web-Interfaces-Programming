import { useState, useContext } from "react";
import UserContext from "../../data/UserContext";

const UserInfo = () => {
    const [userName] = useContext(UserContext);

    return (
        <span>User: {userName}</span>
    );
};

export default UserInfo;