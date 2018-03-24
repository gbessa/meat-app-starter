import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../../shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = []

    constructor(
        private notificationService: NotificationService
    ) {

    }

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((cartItem) => cartItem.menuItem.id === item.id)
        foundItem ? this.increaseQty(foundItem) : this.items.push(new CartItem(item))
        this.notificationService.notify(`Item '${item.name}' foi adicionado ao carrinho`)
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Item '${item.menuItem.name}' foi removido ao carrinho`)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0)
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

}