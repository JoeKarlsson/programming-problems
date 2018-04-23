//@TODO - Make this linear. Hint use a Map and a Linked List

// top k words by frequency
// hello 2
// my 2
// sam 1


// top 10
// k=10
function topK(sentences, k) { // O(S * (n * log(n)))
    if(!sentences || !k) {
        throw new TypeError('Wrong data type you dingus');
    }
    const wordCount = {};
    const uniqueCount = 0

    sentences.forEach((sentence) => { // O(N) where N is num of sentences
        const words = sentence.split('\s+'); // O(Z) where is num of chars
        words.forEach((word) => { // O(K) where K is num of words
            if (!wordCount.hasOwnProperty(word)) {
                wordCount[word] = 0;
            }
            wordCount[word]++; // log(n)
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

// [{"word":"sam","count":1}, ]


const sentences1 = ['hello hello my name is Joe Joe', 'hello my name is Sam', '', '          ', 'undefined', '{}9812e09812', null, null, '/n', '√', 'hello      word']; // [{word: 'hello', count: 3}]
const sentences2 = [];

topK(sentences1, 2);
