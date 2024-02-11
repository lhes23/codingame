/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const horses=[]
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const V = parseInt(inputs[0]);
    const E = parseInt(inputs[1]);
    horses.push({vel:V, ele:E})
}

let minDistance = Number.MAX_VALUE;

for(let i = 0; i < horses.length; i++){
    for(let j = i + 1 ; j < horses.length; j++){
        let dist = Math.abs(horses[i].vel - horses[j].vel) + Math.abs(horses[i].ele - horses[j].ele)
        minDistance = Math.min(dist,minDistance)
    }
}

console.log(minDistance);
