// Q: Return the top k words and their frequency, given an array of sentences
// @TODO - You can make this answer linear. Hint use a Map and a Linked List

function topK(sentences, k = 2) { // O(S * (n * log(n)))
    if(!sentences) {
        throw new TypeError('Wrong data type you dingus');
    }
    const wordCount = {};
    const uniqueCount = 0

    sentences.forEach((sentence) => { // O(N) where N is num of sentences
        const words = sentence.split(' '); // O(Z) where is num of chars
        words.forEach((word) => { // O(K) where K is num of words
            if (!wordCount.hasOwnProperty(word)) {
                wordCount[word] = 0;
            }
            wordCount[word]++;
        });
    });

    const result = Object.keys(wordCount).map(word => { // O(U) num of unique words
        return { word, count: wordCount[word]};
    });

   result.sort((a, b) => { // O(n * log(n)) num of unique words
       return b.count - a.count;
   });

   return result.splice(0, k);
}


const sentences1 = ['hello hello my name is Joe Joe', 'hello my name is Sam'];

const result = topKLinear(sentences1, 2); // [ { word: 'hello', count: 3 }, { word: 'my', count: 2 } ]
console.log('result', result);
