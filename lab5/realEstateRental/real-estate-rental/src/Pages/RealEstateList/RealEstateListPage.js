import RealEstateList from "./RealEstateList";
import { useState, useEffect } from "react";

const RealEstateListPage = (props) => {
  // console.log(props.realEstateList);
  const [realEstateList, setRealEstateList] = useState(props.realEstateList);

  useEffect(() => {
    setRealEstateList(props.realEstateList);
  }, [props.realEstateList]);

  return (
    <div className="real-estate-list-page">
      <h1>Real Estates</h1>
      <RealEstateList realEstateList={realEstateList} />
    </div>
  );
}

export default RealEstateListPage;