import { useState } from "react";
import RealEstateForm from "./RealEstateForm";

const AddNewRealEstatePage = (props) => {
    const [realEstateList, setRealEstateList] = useState(props.realEstateList);

    const handleAddRealEstate = (newRealEstate) => {
        props.onAddRealEstate(newRealEstate);
    };

    return (
        <RealEstateForm onAddRealEstate={handleAddRealEstate} />
    );
}

export default AddNewRealEstatePage;