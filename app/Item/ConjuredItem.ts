import { Item } from '.'

export class ConjuredItem extends Item {
    constructor(name: string, quality :number, sellIn :number) {
        super(name, quality, sellIn)
    }

    public updateValues() :void{
        this.sellIn--

        if( this.sellIn < 0) {
            this.quality -= 2
        }

        this.quality -= 2

        this.qualityCorrection()
    }
}
