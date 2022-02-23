const headquarters = 42;
const oneBlock = 264;

function distanceFromHqInBlocks(start) {
    return Math.abs(headquarters - start);
}

function distanceFromHqInFeet(start) {
   let blocks = distanceFromHqInBlocks(start);
   return blocks * oneBlock;
}
function distanceTravelledInFeet (start, destination) {
    return Math.abs(start - destination) * oneBlock;
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled >400 && feetTravelled <= 2000) {
        return (feetTravelled-400) * .02;
    } else if (feetTravelled >2000 && feetTravelled<=2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}