import { Link } from 'react-router-dom';
import { MyReducerContext } from "../../data/MyReducer";
import UserContext from '../../data/UserContext';
import { useContext } from 'react';
import { updateRealEstate } from '../../Firebase/realEstateService';

const RealEstateListItem = (props) => {
    const realEstate = props.realEstate;
    const [state, dispatcher] = useContext(MyReducerContext);

    return (
        <div className="real-estate-list-item">
            <div>
                <div className="real-estate-image"></div>
                <div className="real-estate-details">
                    <div className="city-button-container">
                        <div className="real-estate-city">{realEstate.city}</div>
                        <Link to={`/selected-real-estate/${realEstate.id}`} state={{ realEstate: realEstate }}>
                            <button className="book-meeting-btn">Book meeting</button>
                        </Link>
                        <button onClick={() => { dispatcher({ type: "add", payload: realEstate }); }} className="book-meeting-btn">Follow</button>
                    </div>
                    <div className="real-estate-bedrooms">{realEstate.bedrooms} sypialnie</div>
                    <div className="real-estate-description">{realEstate.description}</div>
                    <div className="real-estate-price">{realEstate.price} zł</div>
                </div>
                <Link to={`/edit-real-estate/${realEstate.id}`} state={{ realEstate: realEstate }}>
                    <button className="book-meeting-btn">Edit</button>
                </Link>
            </div>
        </div>
    );
}

export default RealEstateListItem;