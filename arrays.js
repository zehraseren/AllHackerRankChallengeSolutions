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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

// *************************************KODU YAZMANIZ GEREKEN KISIM BURASI*************************************
function getSecondLargest(nums) {
    let result = nums.sort((a, b) => b - a); //Burada sort ile sayıları büyükten küçüğe doğru sıralıyoruz.
    let secondLargest = 0;
    let largestNumber = result[0]; //Yaptığımız sıralamada en büyük sayının Index'ini belirtiyoruz.
    for(let i = 0; i < result.length; i++){ //Burada for döngüsünü kullanıyoruz ve şartları belirterek sonucu elde ediyoruz.
        if(result[i] < largestNumber && result[i] > secondLargest){
            secondLargest = result[i];
        }
    } return secondLargest;
}

