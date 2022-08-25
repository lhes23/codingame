/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(' ');
const W: number = parseInt(inputs[0]); // width of the building.
const H: number = parseInt(inputs[1]); // height of the building.
const N: number = parseInt(readline()); // maximum number of turns before game over.
var inputs: string[] = readline().split(' ');
let X0: number = parseInt(inputs[0]);
let Y0: number = parseInt(inputs[1]);

let minX:number = 0
let minY:number = 0
let maxX:number = W - 1
let maxY:number = H - 1


// game loop
while (true) {
    const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

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

    console.log(`${X0} ${Y0}`)
}
