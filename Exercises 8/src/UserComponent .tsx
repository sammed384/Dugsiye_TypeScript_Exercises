import { useState } from "react";

interface User {
    username: string,
    email: string
}

const UserComponent = () => {
    const [user, setUser] = useState<User | null>(null)

    const login = () => {
        setUser({ username: "sam", email: "sam@gmail.com" });
    };

    const logout = () => {
        setUser(null);
    };
    return (
        <div>
            {user ? (
                <div>
                    <h2>Username: {user.username}</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>No user logged in.</p>
                    <button onClick={login}>Login</button>
                </div>
            )}
        </div>
    )
}

export default UserComponent 