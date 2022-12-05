'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Yazmanız gereken kısım burası.
function main() {
    const N = parseInt(readLine().trim(), 10); // Olduğu gibi bırakıyoruz.
    
    if (N%2 == 1) { //Burada ```% (mod alma)``` operatörünü kullanarak ```N```'in tek mi çift mi olduğunu gösteriyoruz.
        console.log ("Weird");
    }
    else if ((N%2 == 0) && (2<=N) && (N<=5)) { //Burada ```N```'in 2 ile 5 arasında olup olmadığına bakıyoruz.
        console.log ("Not Weird");
    }
    else if ((N%2 == 0) && (N>=6) && (N<=20)) { //Burada ```N```'in 6 ile 20 arasında olup olmadığına bakıyoruz.
        console.log ("Weird");
    }
    else if ((N%2 == 0) && (N>20)) { //Burada ```N```'in 20'den büyük olmadığına bakıyoruz.
        console.log ("Not Weird");
    }
}
