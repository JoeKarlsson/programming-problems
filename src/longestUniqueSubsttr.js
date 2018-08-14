// Q: Given a String in which characters may be repeating. Find the length of longest substring of where all characters are unique (non-repeating).

const longestUniqueSubsttr = (str) => {
	const NUM_OF_CHARS = 256;
  const prevIdx = 0;
  const visited = [];
	let currLength = 0;
	let maxLength = 0;
	let uniqueStr = '';

	// init visited arr for all 256 Unique ASCII characters
	for (let i = 0; i < NUM_OF_CHARS; i++) {
		visited[i] = -1;
	}

	// loop through all chars in str
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		// If character is not present in the current lap
		if (visited[charCode] === -1) {
			currLength++;
			uniqueStr += str[i];
		} else if (currLength > maxLength) {
			// if it's a repeat, mark the max length and continue
			maxLength = currLength;
			currLength = i - visited[charCode];
		}
		// Updating Last Seen for current character
    visited[charCode] = i;
	}

	// In case the longest substring is at end
	if (currLength > maxLength) {
		maxLength = currLength;
	}

	return {
		uniqueStr,
		maxLength,
	};
};

const str1 = 'RITAMBHARA'; // RITAMBH 7
// const str1 = 'ABDEFGABEF';

const {
	uniqueStr,
	maxLength,
} = longestUniqueSubsttr(str1);

console.log('uniqueStr', uniqueStr);
console.log('maxLength', maxLength);
