/* Link -> https://www.hackerrank.com/challenges/js10-switch/problem?h_r=profile */

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
function getLetter(s) { //Eğitimin sonundaki fotoğrafı referans alarak yaptım. 
    // Write your code here
    switch(s.charAt(0)) //Yukarıdaki bilgiler arasında "Hint" kısmında dikkat ettiyseniz "s[i]" veya "s.charAt(i)" yazabilirsiniz demiş.
    {
        case ('a' || 'e' || 'i' || 'o' || 'u'): //Çoklu  seçim olduğu için parantez içinde ve "|| (veya)" operatörünü kullanarak yazdım. Ayrıca "case" sonunda ":" koymayı unutmayalım!
            return 'A';
            break; // Yazmazsak bir sonraki "case"e gidece ve bu döngü durmayacaktır. O yüzden "break" yazmayı unutmayalım.
        
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
