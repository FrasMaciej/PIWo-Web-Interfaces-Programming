import { Link } from 'react-router-dom';

const RealEstateListItem = (props) => {
    const realEstate = props.realEstate;
    return (
        <Link className="real-estate-list-item" to={`/selected-real-estate/${realEstate.id}`} state={{ realEstate: realEstate }}>
            <div >
                <div className="real-estate-image"></div>
                <div className="real-estate-details">
                    <div className="city-button-container">
                        <div className="real-estate-city">{realEstate.city}</div>
                        <button className="book-meeting-btn">Book meeting</button>
                    </div>
                    <div className="real-estate-bedrooms">{realEstate.bedrooms} sypialnie</div>
                    <div className="real-estate-description">{realEstate.description}</div>
                    <div className="real-estate-price">{realEstate.price} zł</div>
                </div>
            </div>
        </Link>

    );
}

export default RealEstateListItem;