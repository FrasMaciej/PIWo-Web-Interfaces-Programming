import { useState } from "react";
import RealEstateForm from "./RealEstateForm";
// import { navigate } from "react-router-dom";

const AddNewRealEstatePage = (props) => {
    const [realEstateList, setRealEstateList] = useState(props.realEstateList);

    const handleAddRealEstate = (newRealEstate) => {
        props.onAddRealEstate(newRealEstate);
        // navigate('/real-estate-list');
    };

    return (
        <RealEstateForm onAddRealEstate={handleAddRealEstate} />
    );
}

export default AddNewRealEstatePage;