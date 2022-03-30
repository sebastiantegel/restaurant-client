import { useState } from "react";
import { Register } from "./register";
import { Toggle } from "./Toggle";
import { ShowRestaurant } from "./ShowRestaurant";
import { RestaurantService } from "../services/restaurantService";

const Restaurant = () => {
  const [saving, setSaving] = useState(false);
  const [newRes, setNewRes] = useState();

  function createRestaurant(newRestaurant) {
    setSaving(true);

    let service = new RestaurantService();

    service.create(newRestaurant).then((data) => {
      setSaving(false);
      setNewRes(data);
    });
  }

  return (
    <>
      {!saving && !newRes && <Register save={createRestaurant}></Register>}
      {!saving && newRes && <ShowRestaurant res={newRes}></ShowRestaurant>}
      {saving && <Toggle></Toggle>}
    </>
  );
};

export default Restaurant;
