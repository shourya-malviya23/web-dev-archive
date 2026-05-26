function isPalindrome(word) {
  let lowerword = word.toLowerCase();
  let reversedWord = lowerword.split("").reverse().join("");
  if (lowerword === reversedWord) {
    return true;
  } else {
    return false;
  }
}
//words is an array of strings

function findPalindromeBreaks(words) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      ans.push(i);
    }
  }

  return ans;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength > words.length || phraseLength < 0) {
    return [];
  }

  let ans = [];
  let counts = {};
  let sequences = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    sequences.push({ startIndex: i, text: phrase });
    counts[phrase] = (counts[phrase] || 0) + 1;
  }

  for (let i = 0; i < sequences.length; i++) {
    if (counts[sequences[i].text] > 1) {
      ans.push(sequences[i].startIndex);
    }
  }

  return ans;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0 || !texts) {
    return [];
  }

  let result = [];

  for (let i = 0; i < texts.length; i++) {
    let currentArray = texts[i];

    let repeated = findRepeatedPhrases(currentArray, phraseLength);
    let breaks = findPalindromeBreaks(currentArray);

    result.push({
      repeatedPhrases: repeated,
      palindromeBreaks: breaks,
    });
  }

  return result;
}
