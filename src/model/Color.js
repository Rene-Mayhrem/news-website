export class Color {
    
    generateRandomBrightColor() {
        //? generate a random hue betweem 0 to 360 degrees
        const hue = Math.floor(Math.random() * 360);
        //? Generate saturation
        const saturation = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        //? generate lightnes value
        const lightnes = Math.floor(Math.random()*(100 - 50 + 1)) + 50;
        return `hsl(${hue}, ${saturation}%, ${lightnes}%)`
    }
}