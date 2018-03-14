import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    constructor() {

    }

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((cartItem) => cartItem.menuItem.id === item.id)
        foundItem ? foundItem.quantity++ : this.items.push(new CartItem(item))
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0)
    }

}