import { useContext } from "react";
import { MyReducerContext } from "../../data/MyReducer";
import UserContext from "../../data/UserContext";
import "./BasketPage.css";

const BasketPage = () => {

    const [state, dispatcher] = useContext(MyReducerContext);

    return (
        <div className="basket-container">
            <h2 className="basket-heading">Followed adverts:</h2>
            <div className="basket-items">
                {state.basket.map((item) => (
                    <div key={item.id} className="basket-item">
                        <div className="item-details">
                            <div className="item-city">{item.city}</div>
                            <div className="item-bedrooms">{item.bedrooms} sypialnie</div>
                            <div className="item-description">{item.description}</div>
                            <div className="item-price">{item.price} zł</div>
                        </div>
                        <button
                            className="remove-button"
                            onClick={() => {
                                dispatcher({ type: "remove", payload: item });
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BasketPage;