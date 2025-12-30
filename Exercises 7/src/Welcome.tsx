interface WelcomeProps {
    username: string;
    isPremium: boolean;
}

const Welcome = ({ username, isPremium }: WelcomeProps) => {
    return (
        <div>
            <h1> using with interface</h1>
            {isPremium ? (
                <h3>Welcome back, premium user {username}!</h3>
            ) : (
                <h3>Welcome, guest {username}</h3>
            )}
        </div>
    );
}

export default Welcome;
