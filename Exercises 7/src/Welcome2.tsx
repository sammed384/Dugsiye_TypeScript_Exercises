type Welcome2Props = {
    username: string;
    isPremium: boolean;
}

const Welcome2 = ({ username, isPremium }: Welcome2Props) => {
    return (
        <div>
            <h1> using with type</h1>
            {isPremium ? (

                <h3>Welcome2 back, premium user {username}!</h3>
            ) : (
                <h3>Welcome2, guest {username}</h3>
            )}
        </div>
    )
}

export default Welcome2