import { useState } from "react"
import RealEstateListItem from "./RealEstateListItem";

const RealEstateList = (props) => {
    const realEstateList = props.realEstateList;
    const [cityQuery, setCityQuery] = useState("");
    const [bedroomsQuery, setBedroomsQuery] = useState("");
    const [descriptionQuery, setDescriptionQuery] = useState("");
    const [sortByPrice, setSortByPrice] = useState("ASC");


    const handleCityQueryChange = (event) => {
        setCityQuery(event.target.value);
    };

    const handleBedroomsQueryChange = (event) => {
        setBedroomsQuery(event.target.value);
    };

    const handleDescriptionQueryChange = (event) => {
        setDescriptionQuery(event.target.value);
    };

    const handleSortByPriceChange = () => {
        setSortByPrice(sortByPrice === "ASC" ? "DESC" : "ASC");
    };

    const sortedRealEstateList = realEstateList.sort((a, b) => {
        if (sortByPrice === "ASC") {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    const filteredRealEstateList = sortedRealEstateList.filter(
        (realEstate) =>
            realEstate.city.toLowerCase().includes(cityQuery.toLowerCase()) &&
            realEstate.bedrooms.toString().includes(bedroomsQuery) &&
            realEstate.description.toLowerCase().includes(descriptionQuery.toLowerCase())
    );

    return (
        <div>
            <div className="search-bar">
                <input className="search-input"
                    type="text"
                    placeholder="City..."
                    value={cityQuery}
                    onChange={handleCityQueryChange}
                />
                <input className="search-input"
                    type="text"
                    placeholder="Bedrooms..."
                    value={bedroomsQuery}
                    onChange={handleBedroomsQueryChange}
                />
                <input className="search-input"
                    type="text"
                    placeholder="Description..."
                    value={descriptionQuery}
                    onChange={handleDescriptionQueryChange}
                />
                <button className="sort-btn" onClick={handleSortByPriceChange}>
                    Sort by price {sortByPrice === "ASC" ? "descending" : "ascending"}
                </button>
            </div>
            <div className="real-estate-list">
                {filteredRealEstateList.map((realEstate) => (
                    <RealEstateListItem key={realEstate.id} realEstate={realEstate} />
                ))}
            </div>
        </div>
    );
}

export default RealEstateList;