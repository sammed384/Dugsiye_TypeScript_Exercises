import { useState } from "react";

interface ContactFormProps {
    onSubmit: (data: { name: string; email: string }) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />
            <p>{formData.name} {formData.email}</p>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
