const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  for (let i = 0; i < s1.length; i++) {
    let j = s2.indexOf(s1[i]);
    if(j>=0){
      sum++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return console.log(sum);;
}

module.exports = {
  getCommonCharacterCount
};


getCommonCharacterCount('aabcc', 'adcaa');


/* 

function countPairs(s1, n1, s2, n2)
    {
 
        // To store the frequencies of
        // characters of string s1 and s2
        let freq1 = new Array(26);
        let freq2 = new Array(26);
        freq1.fill(0);
        freq2.fill(0);
 
        // To store the count of valid pairs
        let i, count = 0;
 
        // Update the frequencies of
        // the characters of string s1
        for (i = 0; i < n1; i++)
            freq1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
 
        // Update the frequencies of
        // the characters of string s2
        for (i = 0; i < n2; i++)
            freq2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
 
        // Find the count of valid pairs
        for (i = 0; i < 26; i++)
            count += (Math.min(freq1[i], freq2[i]));
 
        return count;
    }
     
    let s1 = "geeksforgeeks", s2 = "platformforgeeks";
    let n1 = s1.length, n2 = s2.length;
    document.write(countPairs(s1, n1, s2, n2)); */