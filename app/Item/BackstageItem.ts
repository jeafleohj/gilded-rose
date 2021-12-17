import { Item } from '.'

export class BackstageItem extends Item {
    constructor(name :string, quality :number, sellIn :number) {
        super(name, quality, sellIn)
    }

    public updateValues() :void{
        this.sellIn--
        this.quality++

        if ( this.sellIn < 0 ) {
            this.quality = 0
        } else if ( this.sellIn < 5 ) {
            this.quality += 2
        } else if ( this.sellIn < 10 ) {
            this.quality++
        }

        this.qualityCorrection()
    }
}
