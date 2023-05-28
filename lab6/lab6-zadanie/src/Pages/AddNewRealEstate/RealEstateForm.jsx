import { useState } from "react";
import './RealEstateForm.css';
import { addNewRealEstate } from "../../Firebase/realEstateService";
import { useUser } from "../../Firebase/userService";

const RealEstateForm = (props) => {
    const [city, setCity] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const user = useUser();


    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleBedroomsChange = (event) => {
        setBedrooms(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRealEstate = {
            id: Date.now(),
            city,
            bedrooms,
            description,
            price,
        };

        addNewRealEstate(user, newRealEstate);
        setCity('');
        setBedrooms('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="real-estate-form">
            <h2>Add new real estate</h2>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={handleCityChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms number:</label>
                <input
                    type="number"
                    id="bedrooms"
                    value={bedrooms}
                    onChange={handleBedroomsChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>

            <button type="submit">Dodaj</button>
        </form>
    );

};

export default RealEstateForm;