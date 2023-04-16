import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './SelectedRealEstatePage.css';

const SelectedRealEstatePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const realEstate = location.state.realEstate;
    console.log(realEstate);

    const [message, setMessage] = useState("");

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const success = Math.random() < 0.5;
            if (success) {
                setMessage("Successfuly Send");
            } else {
                setMessage("Message Sending Failed");
            }
        },
    });

    return (
        <div className="selected-real-estate-page">
            <h1>{realEstate.city}</h1>
            <p>{realEstate.description}</p>
            <p>Bedrooms: {realEstate.bedrooms}</p>
            <p>Price: {realEstate.price} zł</p>
            <p>Seller: {realEstate.seller}</p>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Your message:
                    <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                    ) : null}
                </label>
                <br />
                <label>
                    Your email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </label>
                <br />
                <button type="submit">Wyślij</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
};

export default SelectedRealEstatePage;