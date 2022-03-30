export class RestaurantService {
  async create(restaurant) {
    let response = await fetch(
      "https://school-restaurant-api.azurewebsites.net/restaurant/create",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(restaurant),
      }
    );

    let data = await response.json();
    return data;
  }

  async get(id) {
    let response = await fetch(
      `https://school-restaurant-api.azurewebsites.net/restaurant/${id}`
    );
    let data = await response.json();
    if (data.length > 0) return data[0];
  }
}
