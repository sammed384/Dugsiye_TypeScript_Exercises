import { useState } from "react";

interface EmailFormProps {
    onSubmit: (email: string) => void;
}

const EmailForm = ({ onSubmit }: EmailFormProps) => {
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                id="email-input"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />
            {email && <p>{email}</p>}
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmailForm;
