import { useLocation, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import * as Yup from 'yup';
import './SelectedRealEstatePage.css';

const SelectedRealEstatePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const realEstate = location.state.realEstate;
    const [message, setMessage] = useState("");
    const messageRef = useRef();
    const emailRef = useRef();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value;
        const messageValue = messageRef.current.value;
        validationSchema.validate({ email: emailValue, message: messageValue })
            .then(() => {
                const success = Math.random() < 0.5;
                if (success) {
                    alert("Successfully sent message")
                    setMessage("Successfully sent message");
                } else {
                    alert("Message sending failed")
                    setMessage("Message sending failed");
                }
            })
            .catch((error) => {
                setMessage(error.message);
            });
    }

    console.log('rendering');
    return (
        <div className="selected-real-estate-page">
            <h1>{realEstate.city}</h1>
            <p>{realEstate.description}</p>
            <p>Bedrooms: {realEstate.bedrooms}</p>
            <p>Price: {realEstate.price} zł</p>
            <p>Seller: {realEstate.seller}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Your message:
                    <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        autoFocus
                    />
                </label>
                <br />
                <label>
                    Your email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailRef}
                    />
                </label>
                <br />
                <button type="submit">Wyślij</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );

};

export default SelectedRealEstatePage;