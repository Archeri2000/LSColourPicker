export function ColourFrom256(colour256: number): Colour{
    if(colour256 < 0 || colour256 > 255) throw new Error("Invalid Colour256 value");
    if(colour256 < 16){
        //TODO: Factor in the custom colour schemes
        throw new Error("Not Implemented yet");
    }else if(colour256 < 232){
        let normalised = colour256 - 16;
        let red = Math.trunc(normalised / 36);
        let green = Math.trunc((normalised % 36)/6);
        let blue = Math.trunc(normalised%6);
        return new Colour(MapRGB(red), MapRGB(green), MapRGB(blue), colour256);
    }else{
        // 24 value Grayscale table
        let grayscale = 0x8 + (colour256 - 232) * 10;
        return new Colour(grayscale, grayscale, grayscale, colour256);
    }
}

function MapRGB(rgb6: number) : number{
    switch (rgb6){
        case 0: return 0;
        case 1: return 0x5f;
        case 2: return 0x87;
        case 3: return 0xaf;
        case 4: return 0xd7;
        case 5: return 0xff;
        default: throw new Error("Invalid RGB6 value");
    }
}



export class Colour{
    colour256: number;
    red : number;
    green: number;
    blue: number;

    constructor(red: number, green: number, blue: number, colour256: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.colour256 = colour256;
    }

    toHexString(): string{
        let num = this.red * 65536 + this.green * 256 + this.blue;
        return "#" + num.toString(16).padStart(6, '0');
    }
}