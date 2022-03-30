import { useState } from "react";
import { RestaurantService } from "../services/restaurantService";
import { Button } from "./styled/Button";

export const ShowRestaurant = (props) => {
  const [res, setRes] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    let service = new RestaurantService();
    service.get(props.res).then((data) => {
      setRes(data);
    });
  };

  return (
    <>
      <h3>{props.res}</h3>

      <Button type="button" onClick={handleClick}>
        Hämta restaurangen
      </Button>

      {show && (
        <div>
          Skickar anropet till:
          https://school-restaurant-api.azurewebsites.net/restaurant/{props.res}
        </div>
      )}

      {res && (
        <div>
          <h3>{res?.name}</h3>
          <p>{res?._id}</p>
          <p>{res?.address}</p>
          <p>{res?.zip}</p>
          <p>{res?.city}</p>
        </div>
      )}
    </>
  );
};
