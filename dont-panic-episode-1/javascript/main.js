/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]); // maximum number of rounds
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbTotalClones = parseInt(inputs[5]); // number of generated clones
const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
const nbElevators = parseInt(inputs[7]); // number of elevators
const elevators = {}
for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    elevators[elevatorFloor] = elevatorPos // save the value of elevator into an object
}

function runLoop(clonePos, cloneFloor, direction){
  // All possible scenarios
    if(elevators[cloneFloor] < clonePos && direction === "RIGHT") return "BLOCK"
    if(elevators[cloneFloor] > clonePos && direction === "LEFT") return "BLOCK"
    if(cloneFloor === exitFloor && exitPos < clonePos && direction === "RIGHT") return "BLOCK"
    if(cloneFloor === exitFloor && exitPos > clonePos && direction === "LEFT") return "BLOCK"
  // Base 
    if(clonePos === width-1 && direction === "RIGHT" || clonePos === 0 && direction === "LEFT") return "BLOCK"
    return "WAIT"
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT
    console.log(runLoop(clonePos, cloneFloor, direction))
}
