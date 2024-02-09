/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
// Add all values into an array
let t = []
for (let i = 0; i < n; i++) {
    t.push(parseInt(inputs[i]));// a temperature expressed as an integer ranging from -273 to 5526
}

const findClosestToZero = () => {
  // Sort the array
    t = t.sort((a,b) => a-b)
    let result
    for(let i=0; i<t.length;i++){
      // Since its sorted the closest number greater than 0 return the value
        if(t[i] >= 0) return t[i]
      // else return the last element
        result = t[i]
    }
    //if result is undefined return 0
    if(!result) return 0
    return result
}
console.log(findClosestToZero())
