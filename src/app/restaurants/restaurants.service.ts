import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService {

    constructor(){

    }

    restaurants(): Restaurant[] {

        let restaurants: Restaurant[] = [{
            id: "bread-bakery",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png"
          },  
          {
            id: "burger-house",
            name: "Burger House",
            category: "Hamburgers",
            deliveryEstimate: "100m",
            rating: 3.5,
            imagePath: "assets/img/restaurants/burgerhouse.png"
          }]

          return restaurants
    }
}