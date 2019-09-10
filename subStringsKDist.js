function areDistinctChars(chars) {
  const charCache = {};

  for (let i = 0; i < chars.length; i++) {
    if (charCache[chars[i]] !== undefined) {
      return false;
    } else {
      charCache[chars[i]] = 0;
    }
  }
  return true;
}

function subStringsKDist(inputStr, kDistinctLettters) {
  const chars = inputStr.split("");
  const subStrings = {};

  for (let i = 0; i < chars.length; i++) {
    const subArray = chars.slice(i, i + kDistinctLettters);
    if (subArray.length === kDistinctLettters) {
      if (areDistinctChars(subArray)) {
        subStr = subArray.join("");
        if (subStrings[subStr] === undefined) {
          subStrings[subStr] = 0;
        }
      }
    }
  }
  return Object.keys(subStrings);
}
