const fs = require('fs');
const wordListPath = require('word-list');
const Trie = require('./Trie');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

const makeDictionaryTrie = () => {
  const trie = new Trie();

  wordArray.map((word) => {
    trie.add(word);
  });

  return trie;
};

const dictionary = makeDictionaryTrie();
const board1 = [
  ['f','x', 'i', 'e'],
  ['a','m', 'l', 'o'],
  ['e','w', 'b', 'x'],
  ['a','s', 't', 'u'],
];

const board2 = [
  ['h','u','n','s'],
  ['n','b','i','e'],
  ['e','a','m','l'],
  ['t','s','s','o'],
];

var uniqueWords = new Set();


const inside = (grid, row, column) => {
  if (row < 0 || column < 0) { return false; }
  if (row >= grid.length) { return false; }
  if (column >= grid[row].length) { return false; }
  return true;
}

var legalMovesWithoutDiagonal = [
  {x: 0, y: -1},
  {x: -1, y: 0},
  {x: 1, y: 0},
  {x: 0, y: 1}
];

var legalMovesWithDiagonal = legalMovesWithoutDiagonal.concat([
  {x: -1, y: -1},
  {x: 1, y: -1},
  {x: -1, y: 1},
  {x: 1, y: 1},
]);

const legalMoves = legalMovesWithDiagonal;

const checkDictionary = (str) => {
  if (dictionary.exists(str)) {
    // found whole word, maybe there is more!
    // uniqueWords[str] = true;
    console.log('uniqueWords[str]', str);
    uniqueWords.add(str);
    return true;
  }
  return false
}

const dfs = (grid, x, y, results, current) => {
  current = current || '';
  if (visited[x][y]) {
    throw new Error('already visited grid at ' + x + ',' + y);
  }
  visited[x][y] = true;
  current += grid[x][y];

  // try moving to next position
  var deadEnd = true;
  legalMoves.forEach((move) => {
    var toX = x + move.x;
    var toY = y + move.y;
    if (inside(grid, toX, toY)) {
      checkDictionary(current)
      if (!visited[toX][toY]) {
        deadEnd = false;
        dfs(grid, toX, toY, results, current);
      }
    }
  });

  if (deadEnd) {
    results.push(current);
  }

  visited[x][y] = false;
};

const boggleWords = (boggle, dict) => {
  const words = [];

  var rows = boggle.length;
  var cols = boggle[0].length;

  visited = [];
  visited.length = boggle.length;
  boggle.forEach(function (row, index) {
    visited[index] = [];
    visited[index].length = row.length;
  });

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      dfs(boggle, i, j, words);
    }
  }

  return uniqueWords;
}

const result = boggleWords(board1, dictionary);
console.log('result', result);
