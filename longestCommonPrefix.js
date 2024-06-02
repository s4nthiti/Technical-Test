const longestCommonPrefix = (strArray) => {
  // Convert all strings to lowercase for case-insensitive comparison
  const lowerCaseArray = strArray.map(item => item.toLowerCase());

  // Handle edge cases: empty array or single element
  if (lowerCaseArray.length === 0) return "";
  if (lowerCaseArray.length === 1) return lowerCaseArray[0];

  let prefix = lowerCaseArray[0];
  let prefixLength = prefix.length;

  // Iterate through remaining strings, shortening the prefix until a match is found
  for (let i = 1; i < lowerCaseArray.length; i++) {
    while (lowerCaseArray[i].indexOf(prefix) !== 0) {
      prefixLength--;
      prefix = prefix.substring(0, prefixLength);

      // If no prefix is found, return an empty string
      if (prefixLength === 0) return "";
    }
  }

  return prefix;
};

// Get input from user (optional)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter an array of strings (separated by spaces): ', (input) => {
  const strArray = input.trim().split(' ');
  const result = longestCommonPrefix(strArray);
  console.log('Longest common prefix:', result);
  readline.close();
});