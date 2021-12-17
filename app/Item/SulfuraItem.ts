import { Item } from '.'

export class SulfuraItem extends Item {
    constructor(name :string, quality :number, sellIn :number) {
        super(name, quality, sellIn)
    }

    public updateValues() :void{
    }
}
