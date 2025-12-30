import { useState } from "react";

interface AgeFormProps {
    onSubmit: (age: number) => void;
}

const AgeForm = ({ onSubmit }: AgeFormProps) => {
    const [age, setAge] = useState<number | "">("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setAge(isNaN(value) ? "" : value);

        if (!isNaN(value) && value < 18) {
            setError("You must be at least 18 years old.");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof age === "number" && age >= 18) {
            onSubmit(age);
        } else {
            setError("You must be at least 18 years old.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
                min={0}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {typeof age === "number" && age >= 18 && <p style={{ color: "green" }}>Age: {age}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default AgeForm;
