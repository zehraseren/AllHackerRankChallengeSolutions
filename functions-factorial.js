'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// *************************************KODU YAZMANIZ GEREKEN KISIM BURASI*************************************
function factorial (n) { //Recursion kısmındaki verilen örneği referans alarak yapabilirsiniz (Çözüm mantığı açısından, algoritma videolarını izleyenler hatırlayacaktır).
    return (n === 1) ? n : (n*factorial(n-1))
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
