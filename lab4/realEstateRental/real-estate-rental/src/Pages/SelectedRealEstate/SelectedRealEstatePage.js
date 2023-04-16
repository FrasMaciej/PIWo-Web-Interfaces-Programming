import { useLocation, useParams } from "react-router-dom";

const SelectedRealEstatePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const realEstate = location.state.realEstate
    console.log(realEstate)

    return (
        <div>

        </div>
    );
}

export default SelectedRealEstatePage;