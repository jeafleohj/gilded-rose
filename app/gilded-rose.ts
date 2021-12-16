const enum ItemsName {
    BRIE = 'Aged Brie',
    BACKSTAGE ='Backstage passes to a TAFKAL80ETC concert',
    SULFURA = 'Sulfuras, Hand of Ragnaros',
}

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name :string, quality :number, sellIn :number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export class GildedRose {
    private items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private updateQualityItem(position :number, new_value :number) :void {
        if ( new_value >= 0 && new_value <= 50 ) {
            this.items[position].quality = new_value
        }
    }

    private decreaseSellIn(position :number) :void {
        let name_item = this.items[position].name

        if ( ItemsName.SULFURA != name_item ) {
            this.items[position].sellIn-- 
        }
    }

    private qualityCorrection(quality :number) :number {
        if ( quality < 0 ) {
            quality = 0 
        } else if ( quality > 50 ) {
            quality = 50 
        }

        return quality
    }

    private newQualityBrieItem(position :number) {
        let quality = this.items[position].quality

        this.decreaseSellIn(position)

        if ( this.items[position].sellIn < 0 ){
            quality = quality + 1
        }

        quality = quality + 1

        return quality
    }

    private newQualityBackStageItem(position :number) :number {
        let quality = this.items[position].quality
        let sell_in :number

        this.decreaseSellIn(position)

        quality = quality + 1

        sell_in = this.items[position].sellIn

        if ( sell_in < 0 ){
            quality = 0
        } else if ( sell_in < 5 ) {
            quality = quality + 2
        } else if ( sell_in < 10 ) {
            quality = quality + 1
        }

        return quality
    }

    private newQualityNormalItem(position :number) :number {
        let quality = this.items[position].quality - 1
        let sell_in: number

        this.decreaseSellIn(position)

        sell_in = this.items[position].sellIn

        if ( sell_in < 0 ){
            quality = quality - 1
        }

        return quality
    }

    public tick() {
        let new_quality: number 
        let item_name: string 

        for (let i = 0; i < this.items.length; i++) {
            item_name = this.items[i].name

            switch ( item_name ) {
                case ItemsName.BRIE:
                    new_quality = this.newQualityBrieItem(i)
                    break
                case ItemsName.BACKSTAGE:
                    new_quality = this.newQualityBackStageItem(i)
                    break
                case ItemsName.SULFURA:
                    continue
                default:
                    new_quality = this.newQualityNormalItem(i)
                    break
            }
 
            new_quality = this.qualityCorrection(new_quality)

            this.updateQualityItem(i, new_quality)
        }
        return this.items;
    }
}
