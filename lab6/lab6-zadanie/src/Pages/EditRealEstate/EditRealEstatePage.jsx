import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { updateRealEstate } from '../../Firebase/realEstateService';
import './EditRealEstate.css';


const EditRealEstatePage = () => {
    const location = useLocation();
    const realEstate = location.state.realEstate;
    const { id } = useParams(); 
    const [updatedRealEstate, setUpdatedRealEstate] = useState({
        id: id,
        city: realEstate.city,
        bedrooms: realEstate.bedrooms,
        description: realEstate.description,
        price: realEstate.price,
    });

    const handleUpdate = async () => {
        await updateRealEstate(id, updatedRealEstate);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRealEstate((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Edit Real Estate</h1>
            <form className="main-container">
                <label>City:</label>
                <input type="text" name="city" value={updatedRealEstate.city} onChange={handleChange} />

                <label>Bedrooms:</label>
                <input type="number" name="bedrooms" value={updatedRealEstate.bedrooms} onChange={handleChange} />

                <label>Description:</label>
                <input type="text" name="description" value={updatedRealEstate.description} onChange={handleChange} />

                <label>Price:</label>
                <input type="number" name="price" value={updatedRealEstate.price} onChange={handleChange} />

                <button className='btn' onClick={handleUpdate}>Update</button>
            </form>
        </div>
    );
};

export default EditRealEstatePage;