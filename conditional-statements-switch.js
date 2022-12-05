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
function getLetter(s) {
    // Write your code here
    switch(s.charAt(0))
    {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            return 'A';
            break;
        
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            return 'B';
            break;
        
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            return 'C';
            break;
        
        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            return 'D';
            break;
    }
}

