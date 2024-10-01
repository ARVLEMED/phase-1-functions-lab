function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42); 
  }
  

function distanceFromHqInFeet(feet) {
   return (distanceFromHqInBlocks(feet))*264;

}

 function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return 2.56;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far'; 
    }
  }