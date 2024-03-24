let speedofCar = prompt("The speed of your car");
// speed of car
// var point = 'points'
// let demeritPoint = 1;
const speedLimit = 70
// speed limit
if (speedofCar <= 70) {
    console.log('ok')
}

else if (speedofCar > 70) {
    let demeritPoint = (speedofCar - speedLimit) / 5;
    console.log(`Points: ` + demeritPoint );

  if(demeritPoint > 12) 

    console.log('License suspended')
 }
