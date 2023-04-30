import RealEstateList from "./RealEstateList";
import { useState } from "react";

const RealEstateListPage = (props) => {
  const [realEstateList, setRealEstateList] = useState(props.realEstateList);

  return (
    <div className="real-estate-list-page">
      <h1>Real Estates</h1>
      <RealEstateList realEstateList={realEstateList} />
    </div>
  );
}

export default RealEstateListPage;