/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

let minX = 0
let minY = 0
let maxX = W - 1
let maxY = H - 1

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    if(bombDir.includes("U")){
        maxY = Y0 - 1
    }else if (bombDir.includes("D")){
        minY = Y0 + 1 
    }

    if(bombDir.includes("L")){
        maxX = X0 - 1
    }else if (bombDir.includes("R")){
        minX = X0 + 1 
    }

    X0 = minX + Math.ceil((maxX - minX) / 2);
    Y0 = minY + Math.ceil((maxY - minY) / 2);

    console.log(X0+" "+Y0)
}
