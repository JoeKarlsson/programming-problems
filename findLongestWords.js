// Google Interview Question

// Please use this Google doc during your interview (your interviewer will see what you write here). To free your hands for typing, we recommend using a headset or speakerphone.

// 15 mins 

// Given a word list and a list of letters, design a program find the longest words that can be constructed from those letters, using each letter only once.

// O(n^2) - Trie O(n) would be great - 

// Presort by length - O(longN) 


const findLongestWords = (dictionaryArr, lettersArr) => {
    let longestWords = [];
    let lettersArrFreq = [];
    let dictionaryArrCharFreq = [];

    // construct an array of letter frequencies for each 
    for(let i=0; i<lettersArr.length; i++) {
        let chache = {}; {a: 1, b:4, c:5 …}
        const letters = lettersArr[i].join(‘’);
        lettersArr.forEach((letter) => {
            cache[letter] = cache[letter] ? 0 : cache[letter]++;
        });
        lettersArrFreq.push(chache);
    }


    // Optimization by presorting the dictionary by length
    for(let i=0; i<dictionaryArr.length; i++) {
            let chache = {};
            const wordArr = lettersArr[i].split(“”);
            wordArr.forEach((letter) => {
                cache[letter] = cache[letter] ? 0 : cache[letter]++;
            });
            chache.word = lettersArr[i];
            dictionaryArrCharFreq.push(chache);
    }

    lettersArrFreq.forEach((letters) => {
        dictionaryArrCharFreq.forEach((word) => {
            lettersFreqTuple = Object.keys(letters)
            dictionaryFreqTuple = Object.keys(word)


            // loop through freq arrays to check that the freqs are the same for each tuple
            // if they are the same then we push it to the longestWords arr
        });
    });
    
return longestWords;
}

findLongestWords(dictionary, ‘atc’) // CAT

