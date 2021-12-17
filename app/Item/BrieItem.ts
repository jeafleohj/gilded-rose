import { Item } from '.'

export class BrieItem extends Item {
    constructor(name :string, quality :number, sellIn :number) {
        super(name, quality, sellIn)
    }

    public updateValues() :void{
        this.sellIn--

        if( this.sellIn < 0) {
            this.quality++
        }

        this.quality++

        this.qualityCorrection()
    }
}
