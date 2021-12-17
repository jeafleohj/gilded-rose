import { Item } from './Item'

export class GildedRose {
    private items: Array<Item>

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    public tick() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateValues()
        }
        return this.items;
    }
}
