export abstract class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name :string, quality :number, sellIn :number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }

    protected qualityCorrection() :void{

        if( this.quality < 0 )
        {
            this.quality = 0
        }
        else if ( this.quality >= 50 )
        {
            this.quality = 50
        }
    }

    abstract updateValues(): void

}
